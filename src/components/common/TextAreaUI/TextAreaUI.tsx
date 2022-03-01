import React, {DetailedHTMLProps, FC, TextareaHTMLAttributes} from "react";
import clsx from "clsx";
import style from "./TextAreaUI.module.scss";
import {useSelector} from "react-redux";
import {selectThemeType} from "../../../store/reducers/app.reducer";

interface ITextAreaUI extends DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
    className?: string
}

export const TextAreaUI: FC<ITextAreaUI> = ({className, ...props}) => {
    const themeType = useSelector(selectThemeType);

    return (
        <div className={clsx({
            [style.textAreaUI]: true,
            [style.textAreaUI_light]: themeType === "light",
            [style.textAreaUI_dark]: themeType === "dark",
        }, className)}>
            <textarea {...props}
                      rows={3}
                      className={clsx({
                          [style.textarea]: true,
                          [style.textarea_light]: themeType === "light",
                          [style.textarea_dark]: themeType === "dark",
                      })}
            />
        </div>

    )
}