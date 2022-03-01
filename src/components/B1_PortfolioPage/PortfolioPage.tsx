import style from "./PortfolioPage.module.scss"
import React, {useState} from "react";
import {H2} from "../common/H2/H2";
import {Container} from "../common/Container/Container";
import img0 from "../../assets/png/portfolio page/00.png";
import img1 from "../../assets/png/portfolio page/01.png";
import img2 from "../../assets/png/portfolio page/02.png";
import img3 from "../../assets/png/portfolio page/03.png";
import clsx from "clsx";
import {BigForm} from "../common/BigForm/BigForm";
import {useSelector} from "react-redux";
import {selectThemeType} from "../../store/reducers/app.reducer";
import {HashLink} from "react-router-hash-link";
import {Portfolio} from "../C5_Portfolio/Portfolio";

const menuItems = [
    "All",
    "Web",
    "Mobile",
    "Games",
    "Advertising",
];

const portfolioItems = [
    {
        id: 0,
        type: "Web",
        img: img0,
        title: "We implement technical solutions",
        text: "Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
    },
    {
        id: 1,
        type: "Web",
        img: img1,
        title: "We implement technical solutions",
        text: "Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
    },
    {
        id: 2,
        type: "Web",
        img: img2,
        title: "We implement technical solutions",
        text: "Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
    },
    {
        id: 3,
        type: "Mobile",
        img: img3,
        title: "We implement technical solutions",
        text: "Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
    },
    {
        id: 4,
        type: "Mobile",
        img: img0,
        title: "We implement technical solutions",
        text: "Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
    },
    {
        id: 5,
        type: "Mobile",
        img: img1,
        title: "We implement technical solutions",
        text: "Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
    },
    {
        id: 6,
        type: "Games",
        img: img2,
        title: "We implement technical solutions",
        text: "Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
    },
    {
        id: 7,
        type: "Games",
        img: img3,
        title: "We implement technical solutions",
        text: "Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
    },
    {
        id: 8,
        type: "Games",
        img: img0,
        title: "We implement technical solutions",
        text: "Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
    },
    {
        id: 9,
        type: "Advertising",
        img: img1,
        title: "We implement technical solutions",
        text: "Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
    },
    {
        id: 10,
        type: "Advertising",
        img: img2,
        title: "We implement technical solutions",
        text: "Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
    },
    {
        id: 11,
        type: "Advertising",
        img: img3,
        title: "We implement technical solutions",
        text: "Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
    },
];


export const PortfolioPage = () => {
    const [selectedType, setSelectedType] = useState("All");
    const selectedItems = portfolioItems.filter(el => selectedType === "All" ? true : el.type === selectedType);
    const themeType = useSelector(selectThemeType);

    return (
        <>
            <Container classNameInner={style.portfolioPage}>
                <H2 text="Portfolio"/>

                <div className={style.menu}>
                    <div className={style.inner}>
                        {
                            menuItems.map(type => (
                                <div key={type}
                                     className={clsx({
                                         [style.item]: true,
                                         [style.item_not_selected_light]: type !== selectedType && themeType === "light",
                                         [style.item_not_selected_dark]: type !== selectedType && themeType === "dark",
                                     })}
                                     onClick={() => setSelectedType(type)}
                                >
                                    {type}
                                </div>
                            ))
                        }
                    </div>
                </div>

                <div className={style.items}>
                    {
                        selectedItems.map(({id, img, title, text}) => (
                            <div key={id}
                                 className={clsx({
                                [style.item]: true,
                                [style.item]: true,
                            })}>
                                <HashLink to={`/portfolio/${id}`}
                                          className={style.imgWrapper}
                                >
                                     <img src={img} alt=""/>
                                </HashLink>

                                <div className={style.textBlock}>
                                    <p className={style.title}>{title}</p>
                                    <p className={style.text}>{text}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>

                <BigForm title="Do you want to order website development?"
                         className={style.bigForm}
                />

            </Container>
        </>
    )
}