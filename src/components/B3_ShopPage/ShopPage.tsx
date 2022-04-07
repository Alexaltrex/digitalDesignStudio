import React from "react";
import {ShopFirstBlock} from "./FirstBlock/ShopFirstBlock";
import {ShopItems} from "./ShopItems/ShopItems";
import style from "./ShopPage.module.scss"
import {BigForm} from "../common/BigForm/BigForm";
import img from "../../assets/png/work/0.png";
import wave from "../../assets/png/wave.png";

export const ShopPage = () => {
    return (
        <div className={style.shopPage} id="top">
            <div className={style.images}>
                <img src={wave} alt="" className={style.wave}/>
                <img src={wave} alt="" className={style.wave}/>
            </div>

            <div className={style.content}>
                <ShopFirstBlock />
                <ShopItems />
                <div id="contacts">
                    <BigForm title="Do you want to order website development?"/>
                </div>
            </div>

        </div>
    )
}