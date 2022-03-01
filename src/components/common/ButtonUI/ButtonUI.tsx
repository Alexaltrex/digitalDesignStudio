import React, {FC} from "react";
import {useSelector} from "react-redux";
import {selectLang} from "../../../store/reducers/app.reducer";
import {translate} from "../../../utils/lang";
import style from "./ButtonUI.module.scss";
import clsx from "clsx";


interface IButtonUI extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    text: string
    className?: string
}

export const ButtonUI: FC<IButtonUI> = ({text, className}) => {
    const lang = useSelector(selectLang);

    return (
        <button className={clsx(style.buttonUI, className)}>
            {translate(text, lang)}
        </button>
    )
}