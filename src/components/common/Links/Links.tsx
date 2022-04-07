import React, {FC} from "react";
import style from "./links.module.scss"
import {useSelector} from "react-redux";
import {selectLang, selectThemeType} from "../../../store/reducers/app.reducer";
import clsx from "clsx";
import { HashLink } from 'react-router-hash-link';
import {translate} from "../../../utils/lang";
import {useLocation} from "react-router-dom";
import { Link } from "react-router-dom";

export const links = [
    {to: "/#about", label: "about us"},
    {to: "/portfolio/#header", label: "portfolio"},
    {to: "/shop/#header", label: "shop"},
    {to: "/#contacts", label: "contacts"},
];

export const Links: FC<{className?: string}> = ({className}) => {
    const themeType = useSelector(selectThemeType);
    const lang = useSelector(selectLang);

    const location = useLocation();
    //console.log(location)
    const pathname = location.pathname;

    links[3].to = pathname + "/#contacts";

    return (
        <nav className={clsx({
            [style.links]: true,
            [style.links_light]: themeType === "light",
            [style.links_dark]: themeType === "dark",
        }, className)}>

            {/*<Link to={links[1].to}*/}
            {/*      className={clsx({*/}
            {/*          [style.link]: true,*/}
            {/*          [style.link_light]: themeType === "light",*/}
            {/*          [style.link_dark]: themeType === "dark",*/}
            {/*      })}*/}
            {/*>*/}
            {/*    {translate(links[1].label, lang)}*/}
            {/*</Link>*/}

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