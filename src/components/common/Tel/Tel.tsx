import React, {FC} from "react";
import style from "./tel.module.scss"
import tel from "../../../assets/png/tel_color.png"
import clsx from "clsx";
import {useSelector} from "react-redux";
import {selectThemeType} from "../../../store/reducers/app.reducer";

export const Tel: FC<{ className?: string }> = ({className}) => {
    const themeType = useSelector(selectThemeType);
    return (
            <a href="tel:+79891234567"
               className={clsx(style.tel, className)}
            >
                <img src={tel} alt=""/>
                <p className={clsx({
                    [style.text]: true,
                    [style.text_light]: themeType === "light",
                    [style.text_dark]: themeType === "dark",
                })}>
                    +7 989 123 45 67
                </p>
            </a>
    )
}