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

            <div className={style.images}
                //data-aos="fade-up"
            >
                <div className={style.inner}>
                    <div className={style.left}>
                        <div className={style.row} data-aos="fade-up">
                            <HashLink to={`/portfolio/0/#header`}>
                                <img src={img0} alt="" data-aos="fade-up"/>
                            </HashLink>
                            <HashLink to={`/portfolio/0/#header`}>
                                <img src={img1} alt="" data-aos="fade-up"/>
                            </HashLink>
                        </div>
                        <div className={style.row} data-aos="fade-up">
                            <HashLink to={`/portfolio/0/#header`}>
                                <img src={img2} alt="" data-aos="fade-up"/>
                            </HashLink>
                            <HashLink to={`/portfolio/0/#header`}>
                                <img src={img3} alt="" data-aos="fade-up"/>
                            </HashLink>
                        </div>
                    </div>
                    <HashLink to={`/portfolio/${0}`}
                              className={style.right}
                    >
                        <img src={img4} alt="" data-aos="fade-up"/>
                    </HashLink>
                </div>
            </div>

            {
                withButton &&
                <HashLink to="/portfolio/#header"
                          className={clsx({
                              [style.btn]: true,
                              [style.btn_light]: themeType === "light",
                              [style.btn_dark]: themeType === "dark",
                          })}
                          data-aos="fade-up"
                >
                    <p>{translate("See more", lang)}</p>
                </HashLink>
            }

        </Container>
    )
}