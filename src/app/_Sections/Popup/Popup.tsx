"use client"

import { usePopups } from "@/app/_Store/store"
import { useMediaQuery } from "@/hooks/MediaQuery/useMediaQuery"

import AnimatedDiv from "@/app/_UI/AnimatedTags/AimatedDiv"
import FormSend from "../../_UI/FormSend/FormSend"
import Container from "@/app/_UI/Container/Container"

import "./Popup.scss"

export default function Popup() {

    const { closePopup } = usePopups()

    const isMobile = useMediaQuery("(max-width: 767px)") as boolean

    return (
        <div className="popup">
            <Container typedClass="popup__cont wrapper">
                <AnimatedDiv typedClass="popup">
                    <button className="popup__close-btn" onClick={closePopup}>
                        <img src={!isMobile ? "/img/Popup/plus.svg" : "/img/Icons/close_icon.svg"} alt="Закрыть" />       
                    </button>
                    <h6 className="popup__title">Оставить заявку</h6>
                    <p className="popup__subtitle">Оставьте номер телефона, и мы свяжемся с вами, чтобы предоставить необходимую информацию</p>
                    <FormSend typedClass="form-send" isPopup={true}/>
                </AnimatedDiv>
            </Container>
        </div>
    )
}