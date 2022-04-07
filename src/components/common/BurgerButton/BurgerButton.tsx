import React, {FC} from "react";
import style from "./BurgerButton.module.scss"
import clsx from "clsx";
import {svgIcons} from "../../../assets/svg/svgIcons";
import {useSelector} from "react-redux";
import {selectShowModal} from "../../../store/reducers/app.reducer";

interface IBurgerButton {
    className?: string
    onClick: () => void
}


export const BurgerButton: FC<IBurgerButton> = ({className, onClick}) => {
    const showModal = useSelector(selectShowModal);

    return (
        <div className={clsx({
            [style.burgerButton]: true,
            [style.burgerButton_modal]: showModal.show,
        }, className)}
             onClick={() => onClick()}
        >
            {svgIcons.burger}
        </div>
    )
}