import React from 'react';
import style from "./app.module.scss"
import clsx from "clsx";
import {Header} from "../A1_Header/Header";
import {useSelector} from "react-redux";
import {selectTheme} from "../../store/reducers/app.reducer";
import {Route, Routes} from "react-router-dom";
import {HomePage} from "../B0_HomePage/HomePage";
import {PortfolioPage} from "../B1_PortfolioPage/PortfolioPage";
import {Footer} from "../A2_Footer/Footer";
import {WorkPage} from "../B2_WorkPage/WorkPage";
import {ShopPage} from "../B3_ShopPage/ShopPage";

export type LangType = "eng" | "rus"

export const App = () => {
    const theme = useSelector(selectTheme);

    //console.log(navigator.userAgent);

    return (
        <div className={clsx({
            [style.app]: true,
            [style.app_light1]: theme === "light1",
            [style.app_light2]: theme === "light2",
            [style.app_dark1]: theme === "dark1",
            [style.app_dark2]: theme === "dark2",
        })}>
            <Header/>
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

