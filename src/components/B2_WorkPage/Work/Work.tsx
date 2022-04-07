import style from "./Work.module.scss";
import {H2} from "../../common/H2/H2";
import img from "../../../assets/png/work/0.png";
import clsx from "clsx";
import {Container} from "../../common/Container/Container";
import React from "react";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectThemeType} from "../../../store/reducers/app.reducer";
import icon0 from "../../../assets/png/offer/card-icons/0.png";
import icon1 from "../../../assets/png/offer/card-icons/1.png";
import icon2 from "../../../assets/png/offer/card-icons/2.png";
import icon3 from "../../../assets/png/offer/card-icons/3.png";

const workMock = {
    title: "Website 123",
    icons: [icon0, icon1, icon2, icon3],
    img: img,
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
    linkHref: "https://www.google.ru",
    linkText: "www.google.ru",
}

export const Work = () => {
    const {id} = useParams();
    const work = workMock;
    const themeType = useSelector(selectThemeType);

    return (
        <Container classNameInner={style.work}>
            <H2 text={work.title}/>

            <div className={style.icons} data-aos="fade-up">
                {
                    work.icons.map((icon, index) => (
                        <img key={index} src={icon} alt="" className={style.item} data-aos="fade-up"/>
                    ))
                }
            </div>

            <div className={style.textWrapper}>
                <p className={style.text} data-aos="fade-up">{work.text}</p>
                <a href={work.linkHref}
                   className={clsx({
                       [style.link]: true,
                       [style.link_light]: themeType === "light",
                       [style.link_dark]: themeType === "dark",
                   })}
                   data-aos="fade-up"
                >
                    {work.linkText}
                </a>
            </div>

            <img src={work.img} alt="" className={style.img}/>

        </Container>
    )
}