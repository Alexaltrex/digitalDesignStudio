import React, {useState} from "react";
import style from "./OurTeam.module.scss";
import {H2} from "../common/H2/H2";
import {Container} from "../common/Container/Container";
import img0 from "../../assets/png/our team/0.png";
import img1 from "../../assets/png/our team/1.png";
import img2 from "../../assets/png/our team/2.png";
import img3 from "../../assets/png/our team/3.png";
import "swiper/css";
import SwiperClass from 'swiper/types/swiper-class';
import {Swiper, SwiperSlide} from "swiper/react";
import {useSelector} from "react-redux";
import {selectLang} from "../../store/reducers/app.reducer";
import {Pagination} from "../common/Pagination/Pagination";

const slides = [
    {
        name: "John Simpson",
        job: "Developer UI/UX",
        img: img0
    },
    {
        name: "Sergey Mavrin",
        job: "Designer",
        img: img1
    },
    {
        name: "John Dreik",
        job: "Developer",
        img: img2
    },
    {
        name: "Michael Boosh",
        job: "Tester HTML",
        img: img3
    },
    {
        name: "John Simpson",
        job: "Developer UI/UX",
        img: img0
    },
    {
        name: "Sergey Mavrin",
        job: "Designer",
        img: img1
    },
    {
        name: "John Dreik",
        job: "Developer",
        img: img2
    },
    {
        name: "Michael Boosh",
        job: "Tester HTML",
        img: img3
    },
]

export const OurTeam = () => {
    const [swiper, setSwiper] = useState<SwiperClass | null>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const lang = useSelector(selectLang);

    return (
        <Container classNameInner={style.ourTeam}>
            <H2 text="Our team"/>
            <Swiper data-aos="fade-up"
                    slidesPerView="auto"
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
                    slides.map(({name, job, img}, index) => (
                        <SwiperSlide key={index} className={style.slide}>
                            <div className={style.inner}>
                                <img src={img} alt=""/>
                                <p className={style.name}>
                                    {name}
                                    {/*{translate(name, lang)}*/}
                                </p>
                                <p className={style.job}>
                                    {job}
                                    {/*{translate(job, lang)}*/}
                                </p>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>

            <Pagination dotsNumber={slides.length}
                        currentIndex={currentIndex}
                        onClick={(index: number) => swiper?.slideTo(index)}
            />

        </Container>
    )
}
