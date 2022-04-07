import React, {useEffect, useState} from 'react';
import style from "./app.module.scss"
import clsx from "clsx";
import {Header} from "../A1_Header/Header";
import {useSelector} from "react-redux";
import {selectShowModal, selectTheme} from "../../store/reducers/app.reducer";
import {Route, Routes} from "react-router-dom";
import {HomePage} from "../B0_HomePage/HomePage";
import {PortfolioPage} from "../B1_PortfolioPage/PortfolioPage";
import {Footer} from "../A2_Footer/Footer";
import {WorkPage} from "../B2_WorkPage/WorkPage";
import {ShopPage} from "../B3_ShopPage/ShopPage";
import {BurgerMenu} from "../A3_Modals/BurgerMenu/BurgerMenu";
import {OnSubmitModal} from "../A3_Modals/OnSubmitModal/OnSubmitModal";
import AOS from "aos";
import "aos/dist/aos.css";


export type LangType = "eng" | "rus";

export const App = () => {
    const theme = useSelector(selectTheme);
    const [showBurger, setBurger] = useState(false);
    const showModal = useSelector(selectShowModal);

    useEffect(() => {
        AOS.init({
            duration: 1500,
            once: true,
        });
        AOS.refresh()
    }, []);


    console.log(process.env.REACT_APP_NOT_SECRET_CODE);

    return (
        <div className={clsx({
            [style.app]: true,
            [style.app_light1]: theme === "light1",
            [style.app_light2]: theme === "light2",
            [style.app_dark1]: theme === "dark1",
            [style.app_dark2]: theme === "dark2",
            [style.app_hide]: showBurger || showModal.show,
        })}>

            <BurgerMenu showBurger={showBurger} onClose={() => setBurger(false)}/>
            {showModal.show && showModal.type === "on submit" && <OnSubmitModal/>}

            <Header onClick={() => setBurger(!showBurger)}/>
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/portfolio' element={<PortfolioPage/>}/>
                <Route path='/portfolio/:id' element={<WorkPage/>}/>
                <Route path='/shop' element={<ShopPage/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

