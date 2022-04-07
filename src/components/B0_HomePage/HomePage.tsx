import {Dds} from "../C0_DDS/Dds";
import React from "react";
import {Offer} from "../C1_Offer/Offer";
import {HowMuchIs} from "../C2_HowMuchIs/HowMuchIs";
import {AboutUs} from "../C3_AboutUs/AboutUs";
import {OurTeam} from "../C4_OurTeam/OurTeam";
import {Portfolio} from "../C5_Portfolio/Portfolio";
import {Form} from "../C6_Form/Form";
import {CustomerReviews} from "../C7_CustomerReviews/CustomerReviews";
import {OurPartners} from "../C8_OurPartners/OurPartners";
import {Faq} from "../C9_Faq/Faq";
import {BigForm} from "../common/BigForm/BigForm";
import style from "./HomePage.module.scss"
import wave from "../../assets/png/wave.png";

export const HomePage = () => {
    return (
        <div className={style.homePage}>
            <div className={style.images}>
                <img src={wave} alt="" className={style.wave}/>
                <img src={wave} alt="" className={style.wave}/>
                <img src={wave} alt="" className={style.wave}/>
                <img src={wave} alt="" className={style.wave}/>
            </div>

            <div className={style.content}>
                <Dds/>
                <Offer/>
                <HowMuchIs/>
                <AboutUs/>
                <OurTeam/>
                <Portfolio title="Portfolio"/>
                <Form/>
                <CustomerReviews/>
                <OurPartners/>
                <Faq/>
                <div id="contacts">
                    <BigForm title="Do you have any questions?"/>
                </div>
            </div>
        </div>
    )
}