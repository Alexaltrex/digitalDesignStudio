import style from "./Faq.module.scss";
import {Container} from "../common/Container/Container";
import React from "react";
import {H2} from "../common/H2/H2";

export const Faq = () => {
    return (
        <Container classNameInner={style.faq}>
            <H2 text="FAQ"/>
        </Container>
    )
}