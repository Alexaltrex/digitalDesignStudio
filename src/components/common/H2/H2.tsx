import React, {FC} from "react";
import style from "./h2.module.scss"
import clsx from "clsx";
import {useSelector} from "react-redux";
import {selectLang} from "../../../store/reducers/app.reducer";
import {translate} from "../../../utils/lang";

interface IH2 {
    text: string
    className?: string
}

export const H2: FC<IH2> = ({text, className}) => {
    const lang = useSelector(selectLang);
    return (
        <div className={style.h2Wrapper}>
            <h2 className={clsx(style.h2, className)}>{translate(text, lang)}</h2>
            <div className={style.line}/>
        </div>
    )
}