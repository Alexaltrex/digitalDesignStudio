import style from "./PortfolioPage.module.scss"
import React from "react";
import {BigForm} from "../common/BigForm/BigForm";
import wave from "../../assets/png/wave.png";
import {PortfolioItems} from "./PortfolioItems/PortfolioItems";

export const PortfolioPage = () => {
    return (
        <div className={style.portfolioPage}>
            <div className={style.images}>
                <img src={wave} alt="" className={style.wave}/>
                <img src={wave} alt="" className={style.wave}/>
            </div>

            <div className={style.content}>

                <PortfolioItems/>

                <div id="contacts">
                    <BigForm title="Do you want to order website development?"
                             className={style.bigForm}
                    />
                </div>

            </div>
        </div>
    )
}