import React from "react";
import {Container} from "../common/Container/Container";
import { H2 } from "../common/H2/H2";
import style from "./aboutUs.module.scss"
import {translate} from "../../utils/lang";
import {useSelector} from "react-redux";
import {selectLang, selectThemeType} from "../../store/reducers/app.reducer";
import img from "../../assets/png/about us/img.png";
import blur from "../../assets/png/about us/blur.png";
import {svgIcons} from "../../assets/svg/svgIcons";
import clsx from "clsx";
import {items} from "./constants";

const text1 = "The Digital Design Studio is a digital solutions studio designed to enable you to bring your business into the modern Internet space. We offer not only up-to-date but also ahead of time solutions: from “turnkey websites” to NFT products.";
const text2 = "We use the most modern technologies and relevant approaches. So your website, mobile app, game, or ad campaign will look and work exactly the way it should look and work today.";

export const AboutUs = () => {
    const lang = useSelector(selectLang);
    const themeType = useSelector(selectThemeType);

    return (
        <Container id="about" classNameInner={style.aboutUs}>
           <H2 text="About Us"/>

            <div className={style.cardWrapper}>

                <div className={style.imgWrapper} data-aos="fade-up">
                    <img src={img} alt=""/>
                    <img src={blur} alt=""/>
                </div>

                <div className={style.card} data-aos="fade-up">

                    <p className={clsx(style.text, style.text1)}>
                        {translate(text1, lang)}
                    </p>
                    <p className={clsx(style.text, style.text1)}>
                        {``}
                    </p>
                    <p className={style.text}>
                        {translate(text2, lang)}
                    </p>

                </div>
            </div>

            <div className={style.items}>
                {
                    items.map(({title, text}, index) => (
                        <div className={style.item} key={index}
                             data-aos="fade-up"
                        >
                            <div className={clsx({
                                [style.iconWrapper]: true,
                                [style.iconWrapper_light]: themeType === "light",
                                [style.iconWrapper_dark]: themeType === "dark",
                            })}>
                                {/*@ts-ignore*/}
                                {svgIcons[`aboutUs${index}`]}
                            </div>
                            <p className={style.title} data-aos="fade-up">{translate(title, lang)}</p>
                            <p className={style.text} data-aos="fade-up">{translate(text, lang)}</p>
                        </div>
                    ))
                }
            </div>

        </Container>
    )
}