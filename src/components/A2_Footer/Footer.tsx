import React from "react";
import style from "./Footer.module.scss";
import {Container} from "../common/Container/Container";
import {svgIcons} from "../../assets/svg/svgIcons";
import {SvgIcon} from "../common/SvgIcon/SvgIcon";
import {useSelector} from "react-redux";
import {selectThemeType} from "../../store/reducers/app.reducer";
import {ThemeSwitcher} from "../common/ThemeSwitcher/ThemeSwitcher";
import {Tel} from "../common/Tel/Tel";
import {LangSwitcher} from "../common/LangSwitcher/LangSwitcher";
import {Links} from "../common/Links/Links";
import {Social} from "../common/Social/Social";

export const Footer = () => {
    const themeType = useSelector(selectThemeType);

    return (
        <footer>
            <Container classNameInner={style.footer}>

                <div className={style.firstBlock}>
                    <SvgIcon icon={themeType === "light" ? svgIcons.logo_dark : svgIcons.logo_light}
                             className={style.logo}
                    />
                    <ThemeSwitcher className={style.theme}/>
                    <p className={style.copy}>DigDesign © 2022</p>
                </div>

                <div className={style.secondMobileBlock}>
                    <Tel/>
                    <LangSwitcher className={style.langSwitcher}/>
                </div>

                <div className={style.thirdBlock}>
                    <Links className={style.links}/>
                    <div className={style.bottom}>
                        <Tel className={style.tel}/>
                        <ThemeSwitcher className={style.theme}/>
                        <LangSwitcher className={style.langSwitcher}/>
                        <div className={style.rest}>
                            <p className={style.copy}>DigDesign © 2022</p>
                            <Social className={style.social}/>
                        </div>

                    </div>
                </div>

            </Container>
        </footer>
    )
}