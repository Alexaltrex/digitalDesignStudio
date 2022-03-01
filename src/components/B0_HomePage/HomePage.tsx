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

export const HomePage = () => {
    return (
        <>
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
            <BigForm title="Do you have any questions?"/>
        </>
    )
}