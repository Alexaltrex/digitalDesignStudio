import React, {FC} from "react";
import style from "./BigForm.module.scss";
import {Container} from "../Container/Container";
import {H2} from "../H2/H2";
import {useFormik} from "formik";
import {InputUI} from "../InputUI/InputUI";
import {translate} from "../../../utils/lang";
import {ButtonUI} from "../ButtonUI/ButtonUI";
import {useSelector} from "react-redux";
import {selectLang} from "../../../store/reducers/app.reducer";
import {TextAreaUI} from "../TextAreaUI/TextAreaUI";
import clsx from "clsx";

interface IValues {
    name: string
    phone: string
    email: string
    question: string
}

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
    const onSubmit = (values: IValues) => {
        console.log(values)
    };
    const formik = useFormik({
        initialValues,
        onSubmit,
    });
    const lang = useSelector(selectLang);

    return (
        <Container classNameInner={clsx(style.bigForm, className && className)}>
            <H2 text={title}/>

            <p className={style.text}>
                Leave a message and we will contact you.
            </p>

            <form onSubmit={formik.handleSubmit}
                  className={style.formik}
            >
                <div className={style.topRow}>
                    <InputUI id="name"
                             placeholder={translate("Your name", lang)}
                             {...formik.getFieldProps("name")}
                    />
                    <InputUI id="phone"
                             placeholder={translate("Your phone", lang)}
                             {...formik.getFieldProps("phone")}
                    />
                    <InputUI id="email"
                             placeholder={translate("Your email", lang)}
                             {...formik.getFieldProps("email")}
                    />
                </div>

                <div className={style.bottomRow}>
                    <TextAreaUI id="question"
                                placeholder={translate("Your question", lang)}
                                {...formik.getFieldProps("question")}
                    />
                    <ButtonUI text="Send me brief"
                              type="submit"
                              className={style.btn}
                    />
                </div>


            </form>


        </Container>
    )
}