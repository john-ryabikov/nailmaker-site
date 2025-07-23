"use client"

import { useRef, useState } from "react"

type Spoiler = {
    id: string,
    q: string,
    a: string
}

interface Props {
  typedClass: string,
  spoiler: Spoiler,
  number: number
}

export default function Spoiler({ typedClass, spoiler, number }: Props) {

    const itemRef = useRef<null | HTMLParagraphElement>(null)

    const [open, setOpen] = useState<null | number>(0)

    return (
        <div className={`${typedClass}__spoiler`}>
            <button 
                className={`${typedClass}__spoiler-q`}
                onClick={() => number === open ? setOpen(null) : setOpen(number)}
            >
                <span>{spoiler.q}</span>
                <img className={`${typedClass}__spoiler-icon ${number === open ? "rotate" : ""}`} src="/img/Icons/plus_icon.svg" alt="+" />
            </button>
            <div 
                className={`${typedClass}__spoiler-collapse ${number === open ? "open" : ""}`}
                style={number === open ? {height: itemRef.current?.scrollHeight} : {height: "0px"}}
            >
                <p className={`${typedClass}__spoiler-a`} ref={itemRef}>{spoiler.a}</p>
            </div>
        </div>
    )
}
