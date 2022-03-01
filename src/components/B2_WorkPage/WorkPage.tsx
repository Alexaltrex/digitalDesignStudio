import {Container} from "../common/Container/Container";
import React from "react";
import {useParams} from "react-router-dom";
import style from "./WorkPage.module.scss"
import {H2} from "../common/H2/H2";
import icon0 from "../../assets/png/offer/card-icons/0.png";
import icon1 from "../../assets/png/offer/card-icons/1.png";
import icon2 from "../../assets/png/offer/card-icons/2.png";
import icon3 from "../../assets/png/offer/card-icons/3.png";
import img from "../../assets/png/work/0.png";
import clsx from "clsx";
import {useSelector} from "react-redux";
import {selectThemeType} from "../../store/reducers/app.reducer";
import {BigForm} from "../common/BigForm/BigForm";
import {Portfolio} from "../C5_Portfolio/Portfolio";

const workMock = {
    title: "Website 123",
    icons: [icon0, icon1, icon2, icon3],
    img: img,
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
    linkHref: "https://www.google.ru",
    linkText: "www.google.ru",

}


export const WorkPage = () => {
    const {id} = useParams();
    const work = workMock;
    const themeType = useSelector(selectThemeType);

    return (
        <Container classNameInner={style.workPage}>
            <H2 text={work.title}/>

            <div className={style.icons}>
                {
                    work.icons.map((icon, index) => (
                        <img key={index} src={icon} alt="" className={style.item}/>
                    ))
                }
            </div>

            <div className={style.textWrapper}>
                <p className={style.text}>{work.text}</p>
                <a href={work.linkHref}
                   className={clsx({
                       [style.link]: true,
                       [style.link_light]: themeType === "light",
                       [style.link_dark]: themeType === "dark",
                   })}
                >
                    {work.linkText}
                </a>
            </div>

            <img src={work.img} alt="" className={style.img}/>

            <div>
                <Portfolio title="Other jobs"
                           withButton={false}
                />
            </div>

            <BigForm title="Do you want to order website development?"
                     className={style.bigForm}
            />

        </Container>
    )
}