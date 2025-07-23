"use client"

import { usePopups } from "@/app/_Store/store"

import "./ButtonPopup.scss"

interface Props {
  typedClass: string,
  icon?: string,
  cont?: string,
  inHeader?: boolean,
  second?: boolean
}

export default function ButtonPopup({ typedClass, icon, cont, inHeader, second }: Props) {

    const { openPopup } = usePopups()

    return (
        <button className={`${typedClass} ${inHeader ? "in-header" : ""} ${second ? "second" : ""}`} onClick={openPopup}>
            <img className={`${typedClass}__btn-icon`} src={icon} alt="Icon" />
            <span className={`${typedClass}__btn-cont`}>{cont}</span>
        </button>
    )
}
