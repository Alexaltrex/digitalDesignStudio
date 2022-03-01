import React, {FC} from "react";
import style from "./langSwitcher.module.scss"
import clsx from "clsx";
import {useDispatch, useSelector} from "react-redux";
import {appAC, selectLang, selectThemeType} from "../../../store/reducers/app.reducer";

export const LangSwitcher: FC<{className?: string}> = ({className}) => {
    const lang = useSelector(selectLang);
    const dispatch = useDispatch();
    const themeType = useSelector(selectThemeType);

    return (
        <div className={clsx({
            [style.langSwitcher]: true,
            [style.langSwitcher_light]: themeType === "light",
            [style.langSwitcher_dark]: themeType === "dark",
        }, className)}>

            <div className={clsx({
                [style.btn]: true,
                [style.btn_light]: themeType === "light",
                [style.btn_dark]: themeType === "dark",
                [style.btn_selected_light]: lang === "eng" && themeType === "light",
                [style.btn_selected_dark]: lang === "eng" && themeType === "dark",
            })}
                 onClick={() => dispatch(appAC.setLang("eng"))}
            >
                ENG
            </div>

            <div className={clsx({
                [style.btn]: true,
                [style.btn_light]: themeType === "light",
                [style.btn_dark]: themeType === "dark",
                [style.btn_selected_light]: lang === "rus" && themeType === "light",
                [style.btn_selected_dark]: lang === "rus" && themeType === "dark",

            })}
                 onClick={() => dispatch(appAC.setLang("rus"))}
            >
                RUS
            </div>

        </div>
    )
}