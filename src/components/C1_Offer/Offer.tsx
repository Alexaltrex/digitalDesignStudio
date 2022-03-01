import React, {useState} from "react";
import style from "./offer.module.scss"
import {Container} from "../common/Container/Container";
import {H2} from "../common/H2/H2";
import {svgIcons} from "../../assets/svg/svgIcons";
import clsx from "clsx";
import {useSelector} from "react-redux";
import {selectLang, selectThemeType} from "../../store/reducers/app.reducer";
import img0 from "../../assets/png/offer/img0.png";
import img1 from "../../assets/png/offer/img1.png";
import img2 from "../../assets/png/offer/img2.png";
import img3 from "../../assets/png/offer/img3.png";
import img4 from "../../assets/png/offer/img4.png";
import img5 from "../../assets/png/offer/img5.png";
import img6 from "../../assets/png/offer/img6.png";
import img7 from "../../assets/png/offer/img7.png";
import img8 from "../../assets/png/offer/img8.png";
import img9 from "../../assets/png/offer/img9.png";
// 1 Design
import i0 from "../../assets/png/offer/card-icons/0.png";
import i1 from "../../assets/png/offer/card-icons/1.png";
import i2 from "../../assets/png/offer/card-icons/2.png";
import i3 from "../../assets/png/offer/card-icons/3.png";
// 2 Frontend
import i4 from "../../assets/png/offer/card-icons/4.png";
// 3 Backend
import i5 from "../../assets/png/offer/card-icons/5.png";
import i6 from "../../assets/png/offer/card-icons/6.png";
import i7 from "../../assets/png/offer/card-icons/7.png";
import i8 from "../../assets/png/offer/card-icons/8.png";
// 4 Blockchain&NFT
import i9 from "../../assets/png/offer/card-icons/9.png";
import i10 from "../../assets/png/offer/card-icons/10.png";
import i11 from "../../assets/png/offer/card-icons/11.png";
import i12 from "../../assets/png/offer/card-icons/12.png";
import i13 from "../../assets/png/offer/card-icons/13.png";
// 5 Turnkey website
import i14 from "../../assets/png/offer/card-icons/14.png";
import i15 from "../../assets/png/offer/card-icons/15.png";
import i16 from "../../assets/png/offer/card-icons/16.png";
// 6 Mobile Apps
import i17 from "../../assets/png/offer/card-icons/0.png";
import i18 from "../../assets/png/offer/card-icons/18.png";
import i19 from "../../assets/png/offer/card-icons/19.png";
// 7 Games
import i20 from "../../assets/png/offer/card-icons/20.png";
// 7 video
import i21 from "../../assets/png/offer/card-icons/21.png";
import i22 from "../../assets/png/offer/card-icons/22.png";
// 9
import i23 from "../../assets/png/offer/card-icons/23.png";
import i24 from "../../assets/png/offer/card-icons/24.png";
import i25 from "../../assets/png/offer/card-icons/25.png";
import {translate} from "../../utils/lang";


const buttons = [
    {
        label: "Design",
        background: "#3CEDB1",
        img: img0,
        text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
        icons: [i0, i1, i2, i3],
    },
    {
        label: "Frontend",
        background: "#EFE154",
        img: img1,
        text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
        icons: [i4],
    },
    {
        label: "Backend",
        background: "#2B99FF",
        img: img2,
        text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
        icons: [i5, i6, i7, i8],
    },
    {
        label: "Games",
        background: "#18F5F5",
        img: img3,
        text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
        icons: [i20],
    },
    {
        label: "Blockchain&NFT",
        background: "#F7931A",
        img: img4,
        text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
        icons: [i9, i10, i11, i12, i13],
    },
    {
        label: "Turnkey website",
        background: "#E744F6",
        img: img5,
        text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
        icons: [i14, i15, i16],
    },
    {
        label: "Mobile Apps",
        background: "#0085FF",
        img: img6,
        text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
        icons: [i17, i18, i19],
    },
    {
        label: "Video",
        background: "#FF0000",
        img: img7,
        text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
        icons: [i21, i22],
    },
    {
        label: "Website support",
        background: "#00BA73",
        img: img8,
        text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
        icons: [],
    },
    {
        label: "Advertising",
        background: "#F9C835",
        img: img9,
        text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
        icons: [i23, i24, i25],
    },
];

export const Offer = () => {
    const [selected, setSelected] = useState(0);
    const themeType = useSelector(selectThemeType);
    const lang = useSelector(selectLang);

    return (
        <Container classNameInner={style.offer}>

            <H2 text="What do we offer"/>

            <div className={style.buttons}>
                <div className={style.inner}>
                    {
                        buttons.map((button, index) => (
                            <button key={index}
                                    className={clsx({
                                        [style.btn]: true,
                                        [style.btn_light]: themeType === "light",
                                        [style.btn_dark]: themeType === "dark",
                                        [style.btn_selected_light]: themeType === "light" && index === selected,
                                        [style.btn_selected_dark]: themeType === "dark" && index === selected,
                                    })}
                                    onClick={() => setSelected(index)}
                            >
                                <div className={style.iconWrapper}>
                                    <div className={style.inner}
                                         style={{background: button.background}}
                                    />

                                    <div className={style.icon}>
                                        {/*@ts-ignore*/}
                                        {svgIcons[`offer_${index}`]}
                                    </div>

                                </div>

                                <p className={style.label}>
                                    {translate(button.label, lang)}
                                </p>

                            </button>
                        ))
                    }
                </div>
            </div>

            <div className={style.cardWrapper}>
                <img src={buttons[selected].img} alt=""/>
                <div className={style.card}>
                    <p className={style.label}>
                        {translate(buttons[selected].label, lang)}
                    </p>

                    <div className={style.icons}>
                        {
                            buttons[selected].icons.map((icon, index) => (
                                <img key={index} src={icon} alt=""/>
                            ))
                        }
                    </div>

                    <p className={style.text}>
                        {translate(buttons[selected].text, lang)}
                    </p>


                    <div className={style.icon}>
                        {/*@ts-ignore*/}
                        {svgIcons[`offer_${selected}`]}
                    </div>
                </div>
            </div>

        </Container>
    )
}