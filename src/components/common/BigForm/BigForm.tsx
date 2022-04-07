import React, {FC} from "react";
import style from "./BigForm.module.scss";
import {Container} from "../Container/Container";
import {H2} from "../H2/H2";
import {useFormik} from "formik";
import {InputUI} from "../InputUI/InputUI";
import {translate} from "../../../utils/lang";
import {ButtonUI} from "../ButtonUI/ButtonUI";
import {useDispatch, useSelector} from "react-redux";
import {appAC, selectLang, sendEmail} from "../../../store/reducers/app.reducer";
import {TextAreaUI} from "../TextAreaUI/TextAreaUI";
import clsx from "clsx";
import {regEmail} from "../../../utils/constants";

interface IValues {
    name: string
    phone: string
    email: string
    question: string
}
type ErrorsType = Partial<IValues>

interface IBigForm {
    title: string
    className?: string
}

export const BigForm: FC<IBigForm> = ({title, className}) => {
    const initialValues: IValues = {
        name: "",
        phone: "",
        email: "",
        question: "",
    }

    const lang = useSelector(selectLang);
    const subTitle = translate("Leave a message and we will contact you", lang);

    const validate = ({name, phone, email, question}: IValues): ErrorsType => {
        const errors = {} as ErrorsType
        if (!name) {
            errors.name = "Required"
        }
        if (!email) {
            errors.email = "Required"
        }
        if (email && !regEmail.test(email)) {
            errors.email = "Wrong email"
        }
        if (!question) {
            errors.question = "Required"
        }
        return errors
    }

    const dispatch = useDispatch();

    const onSubmit = (values: IValues) => {
        dispatch(sendEmail(values));
        //dispatch(appAC.setShowModal({show: true, type: 'on submit'}));
        formik.resetForm();
    };

    const formik = useFormik({
        initialValues,
        validate,
        onSubmit,
    });

    return (
        <Container classNameInner={clsx(style.bigForm, className && className)}>
            <H2 text={title}/>

            <p className={style.text} data-aos="fade-up">
                {subTitle}
            </p>

            <form onSubmit={formik.handleSubmit}
                  className={style.formik}
            >
                <div className={style.topRow}
                     data-aos="fade-up"
                >
                    <div className={style.fieldWrapper}>
                        <InputUI id="name"
                                 placeholder={translate("Enter your name", lang)}
                                 {...formik.getFieldProps("name")}
                        />
                        {formik.errors.name && <p className={style.error}>{translate(formik.errors.name, lang)}</p>}
                    </div>

                    <InputUI id="phone"
                             placeholder={translate("Enter your phone", lang)}
                             {...formik.getFieldProps("phone")}
                    />

                    <div className={style.fieldWrapper}>
                        <InputUI id="email"
                                 placeholder={translate("Enter your email", lang)}
                                 {...formik.getFieldProps("email")}
                        />
                        {formik.errors.email && <p className={style.error}>{translate(formik.errors.email, lang)}</p>}
                    </div>

                </div>

                <div className={style.bottomRow}
                     data-aos="fade-up"
                >
                    <div className={clsx(style.fieldWrapper, style.textArea)}>
                        <TextAreaUI id="question"
                                    placeholder={translate("Enter your question", lang)}
                                    {...formik.getFieldProps("question")}
                        />
                        {formik.errors.question && <p className={style.error}>{translate(formik.errors.question, lang)}</p>}
                    </div>

                    <ButtonUI text="Ask a Question"
                              type="submit"
                              className={style.btn}
                    />
                </div>
            </form>
        </Container>
    )
}