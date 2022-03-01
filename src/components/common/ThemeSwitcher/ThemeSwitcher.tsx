import React, {FC} from "react";
import style from "./themeSwitcher.module.scss"
import clsx from "clsx";
import {SvgIcon} from "../SvgIcon/SvgIcon";
import {svgIcons} from "../../../assets/svg/svgIcons";
import {useDispatch, useSelector} from "react-redux";
import {appAC, selectThemeType} from "../../../store/reducers/app.reducer";

interface IThemeSwitcher {
    className?: string
}

export const ThemeSwitcher: FC<IThemeSwitcher> = ({
                                                      className,
                                                  }) => {
    const themeType = useSelector(selectThemeType);
    const dispatch = useDispatch();

    return (
        <div className={clsx(style.themeSwitcher, className)}>
            <div className={clsx({
                [style.btn]: true,
                [style.btn_left_light]: themeType === "light",
                [style.btn_left_dark]: themeType === "dark",
            })}
                 onClick={() => {
                     dispatch(appAC.setTheme("light2"));
                     dispatch(appAC.setThemeType("light"));
                 }}
            >
                <SvgIcon icon={themeType === "light" ? svgIcons.sun_light : svgIcons.sun_dark}/>
            </div>

            <div className={clsx({
                [style.btn]: true,
                [style.btn_right_light]: themeType === "light",
                [style.btn_right_dark]: themeType === "dark",
            })}
                 onClick={() => {
                     dispatch(appAC.setTheme("dark1"));
                     dispatch(appAC.setThemeType("dark"));
                 }}
            >
                <SvgIcon icon={themeType === "light" ? svgIcons.moon_dark : svgIcons.moon_light}/>
            </div>
        </div>
    )
}