import React, {FC} from "react";
import style from "./Portfolio.module.scss"
import {Container} from "../common/Container/Container";
import {H2} from "../common/H2/H2";
import img0 from "../../assets/png/portfolio/0.png";
import img1 from "../../assets/png/portfolio/1.png";
import img2 from "../../assets/png/portfolio/2.png";
import img3 from "../../assets/png/portfolio/3.png";
import img4 from "../../assets/png/portfolio/4.png";
import {HashLink} from "react-router-hash-link";
import {useSelector} from "react-redux";
import {selectLang, selectThemeType} from "../../store/reducers/app.reducer";
import {translate} from "../../utils/lang";
import clsx from "clsx";

interface IPortfolio {
    title: string
    withButton?: boolean
}


export const Portfolio: FC<IPortfolio> = ({
                                              title,
                                              withButton = true
                                          }) => {
    const lang = useSelector(selectLang);
    const themeType = useSelector(selectThemeType);

    return (
        <Container classNameInner={style.portfolio}>
            <H2 text={title}/>

            <div className={style.images}>
                <div className={style.inner}>
                    <div className={style.left}>
                        <div>
                            <img src={img0} alt=""/>
                            <img src={img1} alt=""/>
                        </div>
                        <div>
                            <img src={img2} alt=""/>
                            <img src={img3} alt=""/>
                        </div>
                    </div>
                    <img src={img4} alt=""/>
                </div>
            </div>

            {
                withButton &&
                <HashLink to="/portfolio"
                          className={clsx({
                              [style.btn]: true,
                              [style.btn_light]: themeType === "light",
                              [style.btn_dark]: themeType === "dark",
                          })}
                >
                    <p>{translate("See more", lang)}</p>
                </HashLink>
            }

        </Container>
    )
}