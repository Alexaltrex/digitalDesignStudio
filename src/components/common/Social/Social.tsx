import React, {FC} from "react";
import style from "./social.module.scss";
import clsx from "clsx";
import {svgIcons} from "../../../assets/svg/svgIcons";
import {SvgIcon} from "../SvgIcon/SvgIcon";
import {useSelector} from "react-redux";
import {selectThemeType} from "../../../store/reducers/app.reducer";

interface ISocial {
    className?: string
}

const icons = [
    {icon: svgIcons.telegram, href: ""},
    {icon: svgIcons.phone, href: ""},
    {icon: svgIcons.instagram, href: ""},
];

export const Social: FC<ISocial> = ({className}) => {
    const themeType = useSelector(selectThemeType);

    return (
        <div className={clsx({
            [style.social]: true,
            [style.social_light]: themeType === "light",
            [style.social_dark]: themeType === "dark",
        }, className)}>
            {
                icons.map((icon, index) => (
                    <a key={index}
                       href={icon.href}
                       className={clsx({
                           [style.icon]: true,
                           [style.icon_light]: themeType === "light",
                           [style.icon_dark]: themeType === "dark",
                       })}
                    >
                        {icon.icon}
                    </a>
                ))
            }
        </div>
    )
}