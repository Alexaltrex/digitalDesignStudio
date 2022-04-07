import React from "react";
import {Container} from "../common/Container/Container";
import style from "./dds.module.scss"
import {useDispatch, useSelector} from "react-redux";
import {appAC, selectLang, selectShowModal} from "../../store/reducers/app.reducer";
import {translate} from "../../utils/lang";
import dds from "../../assets/png/DDS.png";
import {ButtonUI} from "../common/ButtonUI/ButtonUI";
import {INeedWebsiteModal} from "../A3_Modals/INeedWebsiteModal/INeedWebsiteModal";

export const Dds = () => {
    const lang = useSelector(selectLang);
    const showModal = useSelector(selectShowModal);
    const dispatch = useDispatch();
    const textLabel = translate(
        "From turnkey websites to blockchain solutions and NFTs, we do everything you need in today's business.",
        lang
    );

    return (
        <Container classNameInner={style.dds}>

            {showModal.show && showModal.type === 'i need a website' && <INeedWebsiteModal/>}

            <div className={style.firstBlock}
                 data-aos="fade-up"
            >
                <img src={dds} alt=""/>
            </div>

            <div className={style.secondBlock}>

                <h1 className={style.title} data-aos="fade-up">
                    <p>Digital</p>
                    <p>Design</p>
                    <p>Studio</p>
                </h1>

                <p className={style.text}
                   data-aos="fade-up"
                >
                    {textLabel}
                </p>

                <ButtonUI text="i need a website"
                          className={style.btn}
                          data-aos="fade-up"
                          onClick={() => dispatch(appAC.setShowModal({show: true, type: 'i need a website'}))}
                />
            </div>

        </Container>
    )
}