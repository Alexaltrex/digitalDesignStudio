import React, {FC, useRef} from "react";
import style from "./HowMuchIsModal.module.scss";
import {svgIcons} from "../../../assets/svg/svgIcons";
import {useFormik} from "formik";
import {InputUI} from "../../common/InputUI/InputUI";
import {translate} from "../../../utils/lang";
import {useDispatch, useSelector} from "react-redux";
import {appAC, selectLang, selectShowModal, selectThemeType, sendEmail} from "../../../store/reducers/app.reducer";
import {ButtonUI} from "../../common/ButtonUI/ButtonUI";
import clsx from "clsx";
import {useOutsideClick} from "../../../hooks/useOutsideClick";
import {ICard} from "../../C2_HowMuchIs/constants";
import {regEmail} from "../../../utils/constants";

interface IValues {
    name: string
    email: string
}
type ErrorsType = Partial<IValues>
interface IHowMuchIsModal {
    card: ICard | null
}

export const HowMuchIsModal: FC<IHowMuchIsModal> = ({card}) => {
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
        dispatch(sendEmail({...values, order: card?.title}));
        dispatch(appAC.setShowModal({show: false, type: ''}));


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

    //useEffect(() => console.log(card), [card]);

    const ref = useRef<HTMLDivElement>(null);

    useOutsideClick(ref, () => {
        dispatch(appAC.setShowModal({show: false, type: ''}))
    });

    return (
        <div className={clsx({
            [style.howMuchIsModal]: true,
            [style.howMuchIsModal_light]: themeType === "light",
            [style.howMuchIsModal_dark]: themeType === "dark",
            [style.howMuchIsModal_show]: showModal.show && showModal.type === 'how much is',
        })}>
            {
                card &&
                <div className={style.content}
                     ref={ref}
                >

                    <button className={style.close}
                            onClick={onCloseHandler}
                    >
                        {svgIcons.close}
                    </button>

                    <div className={style.iconWrapper}>
                        <div className={style.back}
                             style={{background: card.background}}
                        />
                        {card.icon}
                    </div>

                    <p className={style.title}>{card.title}</p>
                    <p className={style.text}>{card.text}</p>

                    <form onSubmit={formik.handleSubmit}
                          className={style.form}
                    >
                        <div className={style.fieldWrapper}>
                            <InputUI id="name"
                                     placeholder={translate("Your name", lang)}
                                     {...formik.getFieldProps("name")}
                            />
                            {formik.errors.name && <p className={style.error}>{translate(formik.errors.name, lang)}</p>}
                        </div>

                        <div className={style.fieldWrapper}>
                            <InputUI id="email"
                                     placeholder={translate("Email", lang)}
                                     {...formik.getFieldProps("email")}
                                     className={style.field}
                            />
                            {formik.errors.email && <p className={style.error}>{translate(formik.errors.email, lang)}</p>}
                        </div>

                        <ButtonUI text="Send me brief" type="submit" className={style.btn}/>
                    </form>
                </div>
            }
        </div>
    )
}