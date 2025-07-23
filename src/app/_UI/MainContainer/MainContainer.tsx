"use client"

import { usePopups } from "@/app/_Store/store"

import Popup from "@/app/_Sections/Popup/Popup"
import AnimatedMain from "../AnimatedTags/AnimatedMain"
import MenuMobile from "../MenuMobile/MenuMobile"
import Alerts from "../Alerts/Alerts"
// import PhoneButton from "../PhoneButton/PhoneButton"

export default function MainContainer({ children }: Readonly<{children: React.ReactNode}>){

    const { showPopup } = usePopups()

    return (
        <AnimatedMain typedClass="main-page">
            <Alerts/>
            {showPopup && <Popup/>}
            <MenuMobile typedClass="menu-mobile"/>
            {children}
            {/* <PhoneButton/> */}
        </AnimatedMain>
    )
}
