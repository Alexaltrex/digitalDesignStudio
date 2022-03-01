import React from "react";
import {Container} from "../common/Container/Container";
import style from "./dds.module.scss"
import {useSelector} from "react-redux";
import {selectLang} from "../../store/reducers/app.reducer";
import {translate} from "../../utils/lang";
import dds from "../../assets/png/DDS.png"
import {ButtonUI} from "../common/ButtonUI/ButtonUI";


export const Dds = () => {
    const lang = useSelector(selectLang);

    return (
        <section>
            <Container classNameInner={style.dds}>

                <div className={style.firstBlock}>
                    <img src={dds} alt=""/>
                </div>


                <div className={style.secondBlock}>

                    <h1 className={style.title}>
                        <p>Digital</p>
                        <p>Design</p>
                        <p>Studio</p>
                    </h1>

                    <p className={style.text}
                    >
                        {translate(
                            "We create a solution based on the real needs of the client",
                            lang
                        )}
                    </p>

                    <ButtonUI text="i need a website" className={style.btn}/>
                </div>

            </Container>
        </section>
    )
}