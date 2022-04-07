import {Container} from "../common/Container/Container";
import React from "react";
import style from "./Form.module.scss"
import img from "../../assets/png/form/img.png";
import {useDispatch, useSelector} from "react-redux";
import {appAC, selectLang, selectThemeType, sendBrief} from "../../store/reducers/app.reducer";
import {translate} from "../../utils/lang";
import {useFormik} from "formik";
import {InputUI} from "../common/InputUI/InputUI";
import {ButtonUI} from "../common/ButtonUI/ButtonUI";
import {regEmail} from "../../utils/constants";
// @ts-ignore
import file from "../../assets/pdf/brief.pdf"

interface IValues {
    name: string
    email: string
}
type ErrorsType = Partial<IValues>

//////////////////////////////////////////
export const Form = () => {
    const lang = useSelector(selectLang);
    const themeType = useSelector(selectThemeType);
    const title = translate("Do you want a modern interactive website?", lang);
    const subtitle = translate("Leave your contacts and we will send a brief", lang);

    const initialValues: IValues = {
        name: "",
        email: ""
    }

    const validate = ({name, email}: IValues): ErrorsType => {
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
        return errors
    }

    const dispatch = useDispatch();
    const onSubmit = (values: IValues) => {
        //console.log(values);
        //dispatch(appAC.setShowModal({show: true, type: 'on submit'}));
        dispatch(sendBrief(values));
        formik.resetForm();
    }
    const formik = useFormik({
        initialValues,
        validate,
        onSubmit,
    });

    return (
        <Container classNameInner={style.form}>
            <img src={img} alt="" className={style.img} data-aos="fade-up"/>
            <div className={style.formWrapper}>
                <p className={style.title} data-aos="fade-up">{title}</p>
                <p className={style.subtitle} data-aos="fade-up">{subtitle}</p>

                <form onSubmit={formik.handleSubmit}
                      className={style.formik}
                      data-aos="fade-up"
                >
                    <div className={style.fieldWrapper}>
                        <InputUI id="name"
                                 animate={true}
                                 placeholder={translate("Enter your name", lang)}
                                 {...formik.getFieldProps("name")}
                        />
                        {formik.errors.name && <p className={style.error}>{translate(formik.errors.name, lang)}</p>}
                    </div>

                    <div className={style.fieldWrapper}>
                        <InputUI id="email"
                                 animate={true}
                                 placeholder={translate("Enter your email", lang)}
                                 {...formik.getFieldProps("email")}
                        />
                        {formik.errors.email && <p className={style.error}>{translate(formik.errors.email, lang)}</p>}
                    </div>

                    <ButtonUI text="Send me brief" type="submit" className={style.btn}/>
                    <ButtonUI text="Download" href={file} download="brief.pdf" className={style.btn2}/>
                </form>
            </div>

        </Container>
    )
}