import style from "./ShopItems.module.scss";
import {Container} from "../../common/Container/Container";
import React, {useState} from "react";
import clsx from "clsx";
import {useDispatch, useSelector} from "react-redux";
import {appAC, selectShowModal, selectThemeType} from "../../../store/reducers/app.reducer";
import img0 from "../../../assets/png/shop/0.png";
import img1 from "../../../assets/png/shop/1.png";
import img2 from "../../../assets/png/shop/2.png";
import img3 from "../../../assets/png/shop/3.png";
import img4 from "../../../assets/png/shop/4.png";
import {svgIcons} from "../../../assets/svg/svgIcons";
import {BuyWebsiteModal} from "../../A3_Modals/BuyWebsiteModal/BuyWebsiteModal";
import {HashLink} from "react-router-hash-link";

const menuItems = [
    "All",
    "E-shop",
    "Plug-ins WP",
    "Promo",
];

const cards = [
    {
        id: "0",
        src: img0,
        title: "Original Website",
        price: 130,
    },
    {
        id: "1",
        src: img1,
        title: "Original Website",
        price: 130,
    },
    {
        id: "2",
        src: img2,
        title: "Original Website",
        price: 130,
    },
    {
        id: "3",
        src: img3,
        title: "Original Website",
        price: 130,
    },
    {
        id: "4",
        src: img4,
        title: "Original Website",
        price: 130,
    },
];


export const ShopItems = () => {
    const [selectedType, setSelectedType] = useState("All");
    //const selectedItems = portfolioItems.filter(el => selectedType === "All" ? true : el.type === selectedType);
    const themeType = useSelector(selectThemeType);
    const showModal = useSelector(selectShowModal);
    const dispatch = useDispatch();
    const onBuyClickHandler = () => dispatch(appAC.setShowModal({show: true, type: 'buy website'}));

    return (
        <Container classNameInner={style.shopItems}>

            {showModal.show && showModal.type === 'buy website' && <BuyWebsiteModal/>}

            <div className={style.menu} data-aos="fade-up">
                <div className={style.inner}>
                    {
                        menuItems.map(type => (
                            <div key={type}
                                //data-aos="fade-up"
                                 className={clsx({
                                     [style.item]: true,
                                     [style.item_light]: themeType === "light",
                                     [style.item_dark]: themeType === "dark",
                                     [style.item_selected_light]: themeType === "light" && type === selectedType,
                                     [style.item_selected_dark]: themeType === "dark" && type === selectedType,

                                 })}
                                 onClick={() => setSelectedType(type)}
                            >
                                <p>{type}</p>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className={style.cards} data-aos="fade-up">
                {
                    cards.map(({id, src, title, price}) => (
                        <div key={id} className={style.card}
                             data-aos="fade-up"
                        >
                            <img src={src} alt="" data-aos="fade-up"/>
                            <p className={style.title} data-aos="fade-up">{title}</p>
                            <p className={style.price} data-aos="fade-up">{`${price}$`}</p>

                            <div className={style.buttons} data-aos="fade-up">

                                <HashLink to={`/portfolio/0/#header`}
                                          className={style.demo}
                                >
                                    <div className={clsx({
                                        [style.btn]: true,
                                        [style.btn_light]: themeType === "light",
                                        [style.btn_dark]: themeType === "dark",
                                    })}
                                         data-aos="fade-up"
                                    >
                                        <p>Demo</p>
                                    </div>
                                </HashLink>


                                <div className={style.btn}
                                     onClick={onBuyClickHandler}
                                     data-aos="fade-up"
                                >
                                    <div className={clsx({
                                        [style.icon]: true,
                                        [style.icon_dark]: themeType === "dark",
                                    })}>
                                        {svgIcons.shop}
                                    </div>
                                    <p data-aos="fade-up">Buy</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

        </Container>
    )
}