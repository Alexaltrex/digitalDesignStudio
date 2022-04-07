import style from "./ShopFirstBlock.module.scss";
import {Container} from "../../common/Container/Container";
import React from "react";
import { H2 } from "../../common/H2/H2";
import shopPage from "../../../assets/png/shopPage.png";
import {useSelector} from "react-redux";
import {selectLang} from "../../../store/reducers/app.reducer";
import {translate} from "../../../utils/lang";

const text = "These works are sold individually, after the purchase is removed from sale. Previously sold works you can see in the portfolio archive";

export const ShopFirstBlock = () => {
    const lang = useSelector(selectLang);

    return (
        <Container classNameInner={style.ShopFirstBlock}>
            <div className={style.firstBlock} data-aos="fade-up">
                <H2 text="Shop"/>
                <p className={style.text} data-aos="fade-up">{translate(text, lang)}</p>
            </div>

            <div className={style.secondBlock} data-aos="fade-up">
                <img src={shopPage} alt="" data-aos="fade-up"/>
                <p className={style.text} data-aos="fade-up">{translate(text, lang)}</p>
            </div>
        </Container>
    )
}