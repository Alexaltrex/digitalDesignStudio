import React, {useRef} from "react";
import style from "./OnSubmitModal.module.scss"
import {svgIcons} from "../../../assets/svg/svgIcons";
import {translate} from "../../../utils/lang";
import {useDispatch, useSelector} from "react-redux";
import {appAC, selectLang, selectShowModal, selectThemeType} from "../../../store/reducers/app.reducer";
import {ButtonUI} from "../../common/ButtonUI/ButtonUI";
import clsx from "clsx";
import {useOutsideClick} from "../../../hooks/useOutsideClick";

export const OnSubmitModal = () => {
    const lang = useSelector(selectLang);
    const dispatch = useDispatch();
    const onCloseHandler = () => {
        console.log("test")
        dispatch(appAC.setShowModal({show: false, type: ""}))
    };
    const showModal = useSelector(selectShowModal);
    const themeType = useSelector(selectThemeType);
    const ref = useRef<HTMLDivElement>(null);
    useOutsideClick(ref, () => dispatch(appAC.setShowModal({show: false, type: ''})));

    return (
        <div className={clsx({
            [style.onSubmitModal]: true,
            [style.onSubmitModal_light]: themeType === "light",
            [style.onSubmitModal_dark]: themeType === "dark",
            [style.onSubmitModal_show]: showModal.show && showModal.type === 'on submit',
        })}>
            <div className={style.content}
                 ref={ref}
            >
                <button className={style.close}
                        onClick={onCloseHandler}
                >
                    {svgIcons.close}
                </button>
                <p className={style.title}>
                    {translate("Thanks for the request, we will contact you soon", lang)}
                </p>

                <ButtonUI text="Go back"
                          className={style.btn}
                          onClick={onCloseHandler}
                />
            </div>
        </div>
    )
}