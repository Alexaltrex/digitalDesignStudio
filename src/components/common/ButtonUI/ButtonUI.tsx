import React, {ButtonHTMLAttributes, DetailedHTMLProps, FC} from "react";
import {useSelector} from "react-redux";
import {selectLang} from "../../../store/reducers/app.reducer";
import {translate} from "../../../utils/lang";
import style from "./ButtonUI.module.scss";
import clsx from "clsx";

interface IButtonUI extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    text: string
    className?: string
    href?: string
}

type ButtonUIType = {
    text: string
    className?: string
    href?: string
} & DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
& React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>

// type ButtonType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
// type AnchorType = React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>

export const ButtonUI: FC<ButtonUIType> = ({text, className, href, ...props}) => {
    const lang = useSelector(selectLang);

    return (
        <>
            {
                href ? (
                    <a href={href} className={clsx(style.buttonUI, className)} {...props}
                    >
                        {translate(text, lang)}
                    </a>
                ) : (
                    <button className={clsx(style.buttonUI, className)} {...props}
                    >
                        {translate(text, lang)}
                    </button>

                )
            }
        </>

    )
}