import React, {FC} from "react";
import style from "./BurgerMenu.module.scss"
import clsx from "clsx";
import {translate} from "../../../utils/lang";
import {HashLink} from "react-router-hash-link";
import {useSelector} from "react-redux";
import {selectLang, selectTheme, selectThemeType} from "../../../store/reducers/app.reducer";
import {links} from "../../common/Links/Links";
import {useLocation} from "react-router-dom";

interface IBurgerMenu {
    showBurger: boolean
    onClose: () => void
}

export const BurgerMenu: FC<IBurgerMenu> = ({showBurger, onClose}) => {
    const themeType = useSelector(selectThemeType);
    const lang = useSelector(selectLang);
    const theme = useSelector(selectTheme);
    const {pathname, hash} = useLocation();

    links[3].to = pathname + "/#contacts";

    // 0
    // pathname: '/'
    // hash: '#about'

    // 1
    // pathname: '/portfolio'
    // hash: ''

    // 2
    // pathname: '/shop'
    // hash: ''

    // 3
    //
    // hash: '#contacts'

    let linkIndex = 0;

    if (hash === '#contacts') {
        linkIndex = 3
    } else if (pathname === "/shop") {
        linkIndex = 2
    } else if (pathname === '/portfolio') {

    }

    return (
        <div className={clsx({
            [style.burgerMenu]: true,
            [style.burgerMenu_light1]: theme === "light1",
            [style.burgerMenu_light2]: theme === "light2",
            [style.burgerMenu_dark1]: theme === "dark1",
            [style.burgerMenu_dark2]: theme === "dark2",
            [style.burgerMenu_show]: showBurger,
        })}>
            <div className={style.inner}>
                {
                    links.map(({to, label}, index) => (
                        <HashLink key={index}
                                  to={to}
                                  className={clsx({
                                      [style.link]: true,
                                      [style.link_light]: themeType === "light",
                                      [style.link_dark]: themeType === "dark",
                                  })}
                                  smooth={true}
                                  onClick={() => onClose()}
                        >
                            {
                                translate(label, lang)
                            }
                        </HashLink>
                    ))
                }
            </div>
        </div>
    )
}