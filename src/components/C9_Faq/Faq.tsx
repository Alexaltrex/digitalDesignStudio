import style from "./Faq.module.scss";
import {Container} from "../common/Container/Container";
import React, {useState} from "react";
import {H2} from "../common/H2/H2";
import {items} from "./constants";
import {useSelector} from "react-redux";
import {selectLang} from "../../store/reducers/app.reducer";
import {translate} from "../../utils/lang";

export const Faq = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const lang = useSelector(selectLang);

    return (
        <Container classNameInner={style.faq}>
            <H2 text="FAQ"/>

            <div className={style.cards} data-aos="fade-up">
                {
                    items.map(({title, text}, index) => (
                        <div key={index}
                             data-aos="fade-up"
                             className={style.item}
                             onClick={() => setCurrentIndex(index)}
                        >
                            <p className={style.title}>{translate(title, lang)}</p>
                            {
                                currentIndex === index &&
                                <p className={style.text}>{translate(text, lang)}</p>
                            }
                        </div>
                    ))
                }
            </div>
        </Container>
    )
}