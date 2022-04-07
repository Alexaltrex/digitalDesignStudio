import React, {FC} from "react";
import style from "./header.module.scss";
import {Container} from "../common/Container/Container";
import {SvgIcon} from "../common/SvgIcon/SvgIcon";
import {svgIcons} from "../../assets/svg/svgIcons";
import {ThemeSwitcher} from "../common/ThemeSwitcher/ThemeSwitcher";
import {Social} from "../common/Social/Social";
import {useSelector} from "react-redux";
import {selectThemeType} from "../../store/reducers/app.reducer";
import {LangSwitcher} from "../common/LangSwitcher/LangSwitcher";
import {Tel} from "../common/Tel/Tel";
import {Links} from "../common/Links/Links";
import {BurgerButton} from "../common/BurgerButton/BurgerButton";
import {HashLink} from "react-router-hash-link";

interface IHeader {
    onClick: () => void
}

export const Header: FC<IHeader> = ({onClick}) => {
    const themeType = useSelector(selectThemeType);

    return (
        <header id="header">
            <Container classNameInner={style.header}>
                <HashLink to="/#header" className={style.leftBlock}>
                    <SvgIcon icon={themeType === "light" ? svgIcons.logo_dark : svgIcons.logo_light}/>
                </HashLink>

                <div className={style.rightBlock}>

                    <div className={style.topRow}>
                        <div className={style.topRowLeft}>
                            <ThemeSwitcher/>
                            <BurgerButton onClick={() => onClick()}/>
                        </div>

                        <div className={style.topRowRight}>
                            <LangSwitcher className={style.langSwitcher}/>
                            <Social className={style.social}/>
                            <Tel className={style.tel}/>
                        </div>

                    </div>

                    <Links className={style.BottomRow}/>


                </div>
            </Container>

        </header>
    )
}