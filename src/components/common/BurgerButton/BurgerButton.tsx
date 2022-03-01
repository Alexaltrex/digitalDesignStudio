import React, {FC} from "react";
import style from "./BurgerButton.module.scss"
import clsx from "clsx";
import {svgIcons} from "../../../assets/svg/svgIcons";

export const BurgerButton: FC<{className?: string}> = ({className}) => {
    return (
        <div className={clsx(style.burgerButton, className)}>
            {svgIcons.burger}
        </div>
    )
}