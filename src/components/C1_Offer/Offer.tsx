import React, {useState} from "react";
import style from "./offer.module.scss"
import {Container} from "../common/Container/Container";
import {H2} from "../common/H2/H2";
import {svgIcons} from "../../assets/svg/svgIcons";
import clsx from "clsx";
import {useSelector} from "react-redux";
import {selectLang, selectThemeType} from "../../store/reducers/app.reducer";
import {buttons} from "./constants";
import {SelectChangeEvent} from "@mui/material";
import {translate} from "../../utils/lang";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

export const Offer = () => {
    const [selected, setSelected] = useState(0);
    const themeType = useSelector(selectThemeType);
    const lang = useSelector(selectLang);

    const onChangeHandler = (event: SelectChangeEvent) => {
        // @ts-ignore
        setSelected(event.target.value);
        console.log(event.target.value);
    };

    return (
        <Container classNameInner={style.offer}>

            <H2 text="What do we offer"/>

            <div className={style.buttons}
            >
                <div className={style.inner} data-aos="fade-up">
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

            <Select value={String(selected)}
                    data-aos="fade-up"
                    onChange={onChangeHandler}
                    className={clsx({
                        [style.select]: true,
                        [style.select_light]: themeType === "light",
                        [style.select_dark]: themeType === "dark",
                    })}
                    renderValue={(selected) => (
                        <div className={style.menuItem}>
                            <div className={style.iconWrapper}>
                                <div className={style.inner}
                                     //@ts-ignore
                                     style={{ background: buttons[selected].background }}
                                />
                                <div className={style.icon}>
                                    {/*@ts-ignore*/}
                                    {svgIcons[`offer_${selected}`]}
                                </div>
                            </div>
                            {/*@ts-ignore*/}
                            <p className={style.label}>{buttons[selected].label}</p>
                        </div>
                    )}
            >
                {
                    buttons.map(({label, img, background}, index) => (
                        <MenuItem
                            key={index}
                            value={index}
                            className={style.menuItem}
                        >
                            <div className={style.iconWrapper}>
                                <div className={style.inner}
                                     style={{background}}
                                />
                                <div className={style.icon}>
                                    {/*@ts-ignore*/}
                                    {svgIcons[`offer_${index}`]}
                                </div>
                            </div>

                            <p className={style.label}>{translate(label, lang)}</p>

                        </MenuItem>
                    ))
                }
            </Select>

            <div className={style.cardWrapper}>
                <img src={buttons[selected].img} alt="" data-aos="fade-up"/>
                <div className={style.card} data-aos="fade-up">
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