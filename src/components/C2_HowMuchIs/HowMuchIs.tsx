import {Container} from "../common/Container/Container";
import React, {useState} from "react";
import style from "./howMuchIs.module.scss"
import {H2} from "../common/H2/H2";
import clsx from "clsx";
import {useDispatch, useSelector} from "react-redux";
import {appAC, selectLang, selectShowModal, selectThemeType} from "../../store/reducers/app.reducer";
import {translate} from "../../utils/lang";
import {HowMuchIsModal} from "../A3_Modals/HowMuchIsModal/HowMuchIsModal";
import {cards, ICard} from "./constants";

export const HowMuchIs = () => {
    const themeType = useSelector(selectThemeType);
    const showModal = useSelector(selectShowModal);
    const lang = useSelector(selectLang);
    const [card, setCard] = useState<null | ICard>(null);

    const dispatch = useDispatch();

    return (
        <Container classNameInner={style.howMuchIs}>

            {showModal.show && showModal.type === 'how much is' && <HowMuchIsModal card={card}/>}

            <H2 text="How much is"/>

            <div className={style.cards}>
                {
                    cards.map((card, index) => (
                        <div key={index}
                             data-aos="fade-up"
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
                                {card.icon}
                            </div>

                            <p className={style.title} data-aos="fade-up">
                                {translate(card.title, lang)}
                            </p>

                            <p className={style.text} data-aos="fade-up">
                                {translate(card.text, lang)}
                            </p>

                            <p className={style.price}
                               style={{color: card.background}}
                               data-aos="fade-up"
                            >
                                {`${card.price}$`}
                            </p>

                            <button className={style.btn}
                                    onClick={() => {
                                        setCard(card);
                                        dispatch(appAC.setShowModal({show: true, type: 'how much is'}));
                                    }}
                                    data-aos="fade-up"
                            >
                                {translate("Make an order", lang)}
                            </button>

                        </div>
                    ))
                }
            </div>

        </Container>
    )
}