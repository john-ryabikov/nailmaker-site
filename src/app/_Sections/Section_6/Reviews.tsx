"use client"

import { useEffect, useRef } from "react"
import { useMediaQuery } from "@/hooks/MediaQuery/useMediaQuery";
import { useReviewsSlider } from "@/app/_Store/store"

interface Props {
    typedClass: string,
    children: React.ReactNode
}

export default function Reviews({ typedClass, children }: Props) {

    const slider = useRef<HTMLDivElement>(null)

    const isMobile = useMediaQuery("(max-width: 767px)") as boolean

    const { slidePos, slideStep, toggleSlidePos, toggleSlideStep } = useReviewsSlider()

    useEffect(() => {
        if (slider.current) slider.current.style = `transform: translateX(${slidePos}px)`
    }, [slider, slidePos])

    const changeSlideBrif = (step: string) => {
        toggleSlidePos(step, isMobile)
        toggleSlideStep(step)
        if (slider.current) slider.current.style = `transform: translateX(${slidePos}px)`
    }

    return (
        <div className={`${typedClass}__reviews`}>
            <div className={`${typedClass}__reviews-btns`}>
                <button 
                    className={`${typedClass}__reviews-btn ${typedClass}__reviews-btn_prev`}
                    onClick={() => changeSlideBrif("prev")}
                    disabled={slideStep === 1}
                >
                    <img src="img/Icons/arrow-slider_icon.svg" alt="<" />
                </button>
                <button 
                    className={`${typedClass}__reviews-btn`}
                    onClick={() => changeSlideBrif("next")}
                    disabled={slideStep === 3}
                >
                    <img src="img/Icons/arrow-slider_icon.svg" alt=">" />
                </button>
            </div>
            <div className={`${typedClass}__reviews-slider`}>
                <div className={`${typedClass}__reviews-slider-wrapper`} ref={slider}>
                    {children}
                </div>
            </div>
        </div>
    )
}
