import style from "./OurPartners.module.scss"
import {Container} from "../common/Container/Container";
import React, {useState} from "react";
import {H2} from "../common/H2/H2";
import SwiperClass from "swiper/types/swiper-class";
import "swiper/css";
import {Swiper, SwiperSlide} from "swiper/react";
import {svgIcons} from "../../assets/svg/svgIcons";
import {Pagination} from "../common/Pagination/Pagination";

const slides = [
    {
        svg: svgIcons.our_partners_0,
    },
    {
        svg: svgIcons.our_partners_1,
    },
    {
        svg: svgIcons.our_partners_2,
    },
    {
        svg: svgIcons.our_partners_3,
    },
    {
        svg: svgIcons.our_partners_4,
    },
    {
        svg: svgIcons.our_partners_0,
    },
    {
        svg: svgIcons.our_partners_1,
    },
    {
        svg: svgIcons.our_partners_2,
    },
    {
        svg: svgIcons.our_partners_3,
    },
    {
        svg: svgIcons.our_partners_4,
    },
];

export const OurPartners = () => {
    const [swiper, setSwiper] = useState<SwiperClass | null>(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <Container classNameInner={style.ourPartners}>
            <H2 text="Our partners"/>

            <Swiper data-aos="fade-up"
                    slidesPerView="auto"
                    slidesPerGroup={1}
                    onSwiper={(swiper) => {
                        setSwiper(swiper);
                    }}
                    onSlideChange={swiper => setCurrentIndex(swiper.realIndex)}
                    className={style.swiper}
                    spaceBetween={50}
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
                    slides.map(({svg}, index) => (
                        <SwiperSlide key={index} className={style.slide}>
                            {svg}
                        </SwiperSlide>
                    ))
                }
            </Swiper>

            <Pagination dotsNumber={slides.length}
                        currentIndex={currentIndex}
                        onClick={(index: number) => swiper?.slideTo(index)}
                        className={style.pagination}
            />

        </Container>
    )
}