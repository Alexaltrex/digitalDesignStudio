import {Container} from "../common/Container/Container";
import React from "react";
import style from "./howMuchIs.module.scss"
import {H2} from "../common/H2/H2";
import clsx from "clsx";
import {useSelector} from "react-redux";
import {selectLang, selectThemeType} from "../../store/reducers/app.reducer";
import {svgIcons} from "../../assets/svg/svgIcons";
import {translate} from "../../utils/lang";

const cards = [
    {
        title: "Landing Page",
        text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
        price: 200,
        background: "#0085FF",
    },
    {
        title: "Corporative",
        text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
        price: 270,
        background: "#00FFAF",
    },
    {
        title: "E-commerce",
        text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
        price: 380,
        background: "#F9C835",
    },
];


export const HowMuchIs = () => {
    const themeType = useSelector(selectThemeType);
    const lang = useSelector(selectLang);

    return (
        <Container classNameInner={style.howMuchIs}>

            <H2 text="How much is"/>

            <div className={style.cards}>
                {
                    cards.map((card, index) => (
                        <div key={index}
                             className={clsx({
                                 [style.card]: true,
                                 [style.card_light]: themeType === "light",
                                 [style.card_dark]: themeType === "dark",
                             })}
                        >
                            <div className={style.iconWrapper}>
                                <div className={style.back}
                                     style={{background: card.background}}
                                />
                                {/*@ts-ignore*/}
                                {svgIcons[`howMuchIs${index}`]}
                            </div>

                            <p className={style.title}>
                                {translate(card.title, lang)}
                            </p>

                            <p className={style.text}>
                                {translate(card.text, lang)}
                            </p>

                            <p className={style.price}
                               style={{color: card.background}}
                            >
                                {`${card.price}$`}
                            </p>

                            <button className={style.btn}>
                                {translate("Make an order", lang)}
                            </button>

                        </div>
                    ))
                }
            </div>

        </Container>
    )
}