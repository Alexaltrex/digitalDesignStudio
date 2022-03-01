import style from "./CustomerReviews.module.scss";
import {Container} from "../common/Container/Container";
import React, {useState} from "react";
import {H2} from "../common/H2/H2";
import img0 from "../../assets/png/customer reviews/0.png";
import img1 from "../../assets/png/customer reviews/1.png";
import img2 from "../../assets/png/customer reviews/2.png";
import {translate} from "../../utils/lang";
import SwiperClass from "swiper/types/swiper-class";
import {useSelector} from "react-redux";
import {selectLang} from "../../store/reducers/app.reducer";
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination} from "../common/Pagination/Pagination";
import {svgIcons} from "../../assets/svg/svgIcons";
import "swiper/css";

const slides = [
    {
        name: "Dennis Grayston",
        job: "Federal A.G.",
        text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
        img: img0,
    },
    {
        name: "Dennis Grayston",
        job: "Federal A.G.",
        text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
        img: img1,
    },
    {
        name: "Dennis Grayston",
        job: "Federal A.G.",
        text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
        img: img2,
    },
    {
        name: "Dennis Grayston",
        job: "Federal A.G.",
        text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
        img: img0,
    },
    {
        name: "Dennis Grayston",
        job: "Federal A.G.",
        text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
        img: img1,
    },
    {
        name: "Dennis Grayston",
        job: "Federal A.G.",
        text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
        img: img2,
    },
];

export const CustomerReviews = () => {
    const [swiper, setSwiper] = useState<SwiperClass | null>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const lang = useSelector(selectLang);

    return (
        <Container classNameInner={style.customerReviews}>
            <H2 text="Customer Reviews"/>

            <Swiper slidesPerView="auto"
                    slidesPerGroup={1}
                    onSwiper={(swiper) => {
                        setSwiper(swiper);
                    }}
                    onSlideChange={swiper => setCurrentIndex(swiper.realIndex)}
                    className={style.swiper}
                    spaceBetween={30}
                    breakpoints={{
                        0: {
                            centeredSlides: true,
                        },
                        1200: {
                            centeredSlides: false,
                        },
                    }}
            >
                {
                    slides.map(({name, job, text, img}, index) => (
                        <SwiperSlide key={index} className={style.slide}>
                            <div className={style.inner}>
                                <div className={style.topBlock}>
                                    <img src={img} alt="" className={style.img}/>
                                    <div className={style.right}>
                                        <p className={style.name}>{translate(name, lang)}</p>
                                        <p className={style.job}>{translate(job, lang)}</p>
                                        <div className={style.line}/>
                                    </div>
                                </div>

                                <p className={style.text}>{translate(text, lang)}</p>

                                <div className={style.link}>
                                    {svgIcons.arrow_right_down}
                                </div>

                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>

            <Pagination dotsNumber={slides.length}
                        currentIndex={currentIndex}
                        onClick={(index: number) =>  swiper?.slideTo(index)}
            />

        </Container>
    )
}