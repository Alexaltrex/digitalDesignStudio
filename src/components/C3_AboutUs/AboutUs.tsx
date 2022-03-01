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

const text = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.\n" +
    "\n" +
    "Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim."

const items = [
    {
        title: "We create an idea for a future project",
        text: "Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.  Nulla consequat massa quis enim.",
     },
    {
        title: "We implement technical solutions",
        text: "Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
    },
    {
        title: "Planning a promotion strategy",
        text: "Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    },
    {
        title: "We launch your project",
        text: "Cidiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
    },
]



export const AboutUs = () => {
    const lang = useSelector(selectLang);
    const themeType = useSelector(selectThemeType);

    return (
        <Container id="about" classNameInner={style.aboutUs}>
           <H2 text="About Us"/>

            <div className={style.cardWrapper}>

                <div className={style.imgWrapper}>
                    <img src={img} alt=""/>
                    <img src={blur} alt=""/>
                </div>


                <div className={style.card}>

                    <p className={style.text}>
                        {translate(text, lang)}
                    </p>

                </div>
            </div>

            <div className={style.items}>
                {
                    items.map(({title, text}, index) => (
                        <div className={style.item} key={index}>
                            <div className={clsx({
                                [style.iconWrapper]: true,
                                [style.iconWrapper_light]: themeType === "light",
                                [style.iconWrapper_dark]: themeType === "dark",
                            })}>
                                {/*@ts-ignore*/}
                                {svgIcons[`aboutUs${index}`]}
                            </div>
                            <p className={style.title}>{translate(title, lang)}</p>
                            <p className={style.text}>{translate(text, lang)}</p>
                        </div>
                    ))
                }
            </div>

        </Container>
    )
}