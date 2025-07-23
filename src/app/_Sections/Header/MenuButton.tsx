"use client"

import { useMenu } from "@/app/_Store/store"

interface Props {
  typedClass: string
}

export default function MenuButton({ typedClass }: Props) {

    const { openMenu } = useMenu()

    return (
        <button className={typedClass} onClick={openMenu}>
            <img src="/img/Icons/menu_icon.svg" alt="Меню" />
        </button>
    )
}