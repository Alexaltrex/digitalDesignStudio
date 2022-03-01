import React, {FC} from "react";
import style from "./links.module.scss"
import {useSelector} from "react-redux";
import {selectLang, selectThemeType} from "../../../store/reducers/app.reducer";
import clsx from "clsx";
import { HashLink } from 'react-router-hash-link';
import {translate} from "../../../utils/lang";

export const links = [
    {to: "/#about", label: "about us"},
    {to: "/portfolio", label: "portfolio"},
    {to: "/shop", label: "shop"},
    {to: "/contacts", label: "contacts"},
]


export const Links: FC<{className?: string}> = ({className}) => {
    const themeType = useSelector(selectThemeType);
    const lang = useSelector(selectLang);
    return (
        <nav className={clsx({
            [style.links]: true,
            [style.links_light]: themeType === "light",
            [style.links_dark]: themeType === "dark",
        }, className)}>
            {
                links.map((link, index) => (
                    <HashLink key={index}
                              to={link.to}
                              className={clsx({
                                  [style.link]: true,
                                  [style.link_light]: themeType === "light",
                                  [style.link_dark]: themeType === "dark",
                              })}
                              smooth={true}
                    >
                        {
                            translate(link.label, lang)
                        }
                    </HashLink>
                ))
            }
        </nav>
    )
}