import React from "react";
import style from "./WorkPage.module.scss"
import img from "../../assets/png/work/0.png";
import {BigForm} from "../common/BigForm/BigForm";
import {Portfolio} from "../C5_Portfolio/Portfolio";
import {Work} from "./Work/Work";
import wave from "../../assets/png/wave.png";

export const WorkPage = () => {
    return (
        <div className={style.workPage}>
            <div className={style.images}>
                <img src={wave} alt="" className={style.wave}/>
                <img src={wave} alt="" className={style.wave}/>
            </div>

            <div className={style.content}>
                <Work/>
                <Portfolio title="Other jobs"
                           withButton={false}
                />
                <div id="contacts" data-aos="fade-up">
                    <BigForm title="Do you want to order website development?"
                             className={style.bigForm}
                    />
                </div>

            </div>

        </div>
    )
}