import React, {FC, useRef} from "react";
import style from "./INeedWebsiteModal.module.scss";
import {svgIcons} from "../../../assets/svg/svgIcons";
import {useFormik} from "formik";
import {InputUI} from "../../common/InputUI/InputUI";
import {translate} from "../../../utils/lang";
import {useDispatch, useSelector} from "react-redux";
import {appAC, selectLang, selectShowModal, selectThemeType, sendEmail} from "../../../store/reducers/app.reducer";
import {ButtonUI} from "../../common/ButtonUI/ButtonUI";
import clsx from "clsx";
import {useOutsideClick} from "../../../hooks/useOutsideClick";
import {regEmail} from "../../../utils/constants";

interface IValues {
    name: string
    email: string
}
type ErrorsType = Partial<IValues>

export const INeedWebsiteModal = () => {
    const lang = useSelector(selectLang);

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

    const onSubmit = (values: IValues) => {
        dispatch(sendEmail({...values, order: "I need a website"}));
        //dispatch(appAC.setShowModal({show: false, type: ''}));
    }
    const formik = useFormik({
        initialValues,
        validate,
        onSubmit,
    });
    const showModal = useSelector(selectShowModal);

    const dispatch = useDispatch();

    const onCloseHandler = () => {
        dispatch(appAC.setShowModal({show: false, type: ''}));
    }

    const themeType = useSelector(selectThemeType);

    const ref = useRef<HTMLDivElement>(null);

    useOutsideClick(ref, () => {
        dispatch(appAC.setShowModal({show: false, type: ''}))
    });

    return (
        <div className={clsx({
            [style.iNeedWebsiteModal]: true,
            [style.iNeedWebsiteModal_light]: themeType === "light",
            [style.iNeedWebsiteModal_dark]: themeType === "dark",
            [style.iNeedWebsiteModal_show]: showModal.show && showModal.type === 'i need a website',
        })}>

                <div className={style.content}
                     ref={ref}
                >

                    <button className={style.close}
                            onClick={onCloseHandler}
                    >
                        {svgIcons.close}
                    </button>

                    <p className={style.title}>{translate("I need a website", lang)}</p>
                    {/*<p className={style.text}>{translate(card.text, lang)}</p>*/}

                    <form onSubmit={formik.handleSubmit}
                          className={style.form}
                    >
                        <div className={style.fieldWrapper}>
                            <InputUI id="name"
                                     placeholder={translate("Enter your name", lang)}
                                     {...formik.getFieldProps("name")}
                            />
                            {formik.errors.name && <p className={style.error}>{translate(formik.errors.name, lang)}</p>}
                        </div>

                        <div className={style.fieldWrapper}>
                            <InputUI id="email"
                                     placeholder={translate("Enter your email", lang)}
                                     {...formik.getFieldProps("email")}
                                     className={style.field}
                            />
                            {formik.errors.email && <p className={style.error}>{translate(formik.errors.email, lang)}</p>}
                        </div>

                        <ButtonUI text="Make an order" type="submit" className={style.btn}/>
                    </form>
                </div>
        </div>
    )
}