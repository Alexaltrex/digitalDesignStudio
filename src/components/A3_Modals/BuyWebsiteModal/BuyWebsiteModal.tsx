import React, {FC, useRef} from "react";
import style from "./BuyWebsiteModal.module.scss";
import clsx from "clsx";
import img from "../../../assets/png/buyWebsiteModal.png";
import {useDispatch, useSelector} from "react-redux";
import {appAC, selectLang, selectShowModal, selectThemeType, sendEmail} from "../../../store/reducers/app.reducer";
import {translate} from "../../../utils/lang";
import {useFormik} from "formik";
import {InputUI} from "../../common/InputUI/InputUI";
import {ButtonUI} from "../../common/ButtonUI/ButtonUI";
import {svgIcons} from "../../../assets/svg/svgIcons";
import {useOutsideClick} from "../../../hooks/useOutsideClick";
import {regEmail} from "../../../utils/constants";

const card = {
    title: "Car rent",
    price: 130,
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
    img,
}
interface IValues {
    name: string
    email: string
}
type ErrorsType = Partial<IValues>

////////////////////////////////////////////////////
export const BuyWebsiteModal = () => {
    const lang = useSelector(selectLang);
    const initialValues: IValues = {
        name: "",
        email: "",
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
        //dispatch(appAC.setShowModal({show: false, type: ''}));
        dispatch(sendEmail({...values, order: card.title}));
    };

    const formik = useFormik({
        initialValues,
        validate,
        onSubmit,
    });
    const themeType = useSelector(selectThemeType);
    const showModal = useSelector(selectShowModal);
    const onCloseHandler = () => {
        dispatch(appAC.setShowModal({show: false, type: ''}));
    };
    const ref = useRef<HTMLDivElement>(null);
    useOutsideClick(ref, () => dispatch(appAC.setShowModal({show: false, type: ''})));

    return (
        <div className={clsx({
            [style.buyWebsiteModal]: true,
            [style.buyWebsiteModal_light]: themeType === "light",
            [style.buyWebsiteModal_dark]: themeType === "dark",
            [style.buyWebsiteModal_show]: showModal.show && showModal.type === 'buy website',
        })}>
            <div className={style.content}
                 ref={ref}
            >
                <img src={card.img} alt=""/>

                <div className={style.right}>
                    <p className={style.title}>{translate(card.title, lang)}</p>

                    <div className={style.priceWrapper}>
                        <p>{`$${card.price}`}</p>
                        <div className={style.btn}>Demo</div>
                    </div>

                    <p className={style.text}>{translate(card.text, lang)}</p>

                    <form onSubmit={formik.handleSubmit}>
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
                            />
                            {formik.errors.email && <p className={style.error}>{translate(formik.errors.email, lang)}</p>}
                        </div>

                        <ButtonUI text="Buy website"
                                  type="submit"
                                  className={style.submitBtn}
                        />
                    </form>

                    <button className={style.close}
                            onClick={onCloseHandler}
                    >
                        {svgIcons.close}
                    </button>
                </div>


            </div>
        </div>
    )
}