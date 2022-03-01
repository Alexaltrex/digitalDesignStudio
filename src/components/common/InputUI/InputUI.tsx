import React, {FC, InputHTMLAttributes} from "react";
import style from "./InputUI.module.scss"
import {useSelector} from "react-redux";
import {selectThemeType} from "../../../store/reducers/app.reducer";
import clsx from "clsx";

interface IInputUI extends InputHTMLAttributes<HTMLInputElement> {
    className?: string
}

export const InputUI: FC<IInputUI> = ({className, ...props}) => {
    const themeType = useSelector(selectThemeType);

    return (
        <div className={clsx({
            [style.inputUI]: true,
            [style.inputUI_light]: themeType === "light",
            [style.inputUI_dark]: themeType === "dark",
        }, className)}>
            <input {...props} type="text" className={clsx({
                [style.input]: true,
                [style.input_light]: themeType === "light",
                [style.input_dark]: themeType === "dark",
            })}/>
        </div>

    )
}