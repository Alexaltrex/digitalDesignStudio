import {Container} from "../common/Container/Container";
import React from "react";
import style from "./Form.module.scss"
import img from "../../assets/png/form/img.png";
import {useSelector} from "react-redux";
import {selectLang, selectThemeType} from "../../store/reducers/app.reducer";
import {translate} from "../../utils/lang";
import {useFormik} from "formik";
import {InputUI} from "../common/InputUI/InputUI";
import {ButtonUI} from "../common/ButtonUI/ButtonUI";

interface IValues {
    name: string
    email: string
}

export const Form = () => {
    const lang = useSelector(selectLang);
    const themeType = useSelector(selectThemeType);
    const title = translate("Do you want a modern interactive website?", lang);
    const subtitle = translate("Leave your contacts and we will send a brief.", lang);


    const initialValues: IValues = {
        name: "",
        email: ""
    }
    const onSubmit = (values: IValues) => {
        console.log(values)
    }
    const formik = useFormik({
        initialValues,
        onSubmit,
    });

    return (
        <Container classNameInner={style.form}>
            <img src={img} alt="" className={style.img}/>
            <div className={style.formWrapper}>
                <p className={style.title}>{title}</p>
                <p className={style.subtitle}>{subtitle}</p>

                <form onSubmit={formik.handleSubmit}
                      className={style.formik}
                >
                    <InputUI id="name"
                             placeholder={translate("Your name", lang)}
                             {...formik.getFieldProps("name")}
                             className={style.field}
                    />
                    <InputUI id="email"
                             placeholder={translate("Email", lang)}
                             {...formik.getFieldProps("email")}
                             className={style.field}
                    />
                    <ButtonUI text="Send me brief" type="submit" className={style.btn}/>
                </form>
            </div>

        </Container>
    )
}