import { create } from "zustand";
import type{ IAlerts, IMenu, IPopup, IReviewsSlider } from "./store.types";

export const usePopups = create<IPopup>(set => ({
    showPopup: false,
    openPopup: () => set(() => ({showPopup: true})),
    closePopup: () => set(() => ({showPopup: false}))
}))

export const useMenu = create<IMenu>(set => ({
    showMenu: false,
    openMenu: () => set(() => ({showMenu: true})),
    closeMenu: () => set(() => ({showMenu: false}))
}))

export const useAlerts = create<IAlerts>(set => ({
    showAlertDone: false,
    showAlertError: false,
    showAlertErrorPhone: false,
    toggleAlertDone: () => {
        set((state) => ({showAlertDone: !state.showAlertDone}))
        setTimeout(() => {
            set((state) => ({showAlertDone: !state.showAlertDone}))
        }, 2500)
    },
    toggleAlertError: () => {
        set((state) => ({showAlertError: !state.showAlertError}))
        setTimeout(() => {
            set((state) => ({showAlertError: !state.showAlertError}))
        }, 2500)
    },
    toggleAlertErrorPhone: () => {
        set((state) => ({showAlertErrorPhone: !state.showAlertErrorPhone}))
        setTimeout(() => {
            set((state) => ({showAlertErrorPhone: !state.showAlertErrorPhone}))
        }, 2500)
    }
}))

export const useReviewsSlider = create<IReviewsSlider>(set => ({
    slidePos: 0,
    slideStep: 1,
    toggleSlidePos: (step, isMobile) => {
        step === "next" && set((state) => ({slidePos: state.slidePos - (isMobile ? 360 : 1230)}))
        step === "prev" && set((state) => ({slidePos: state.slidePos + (isMobile ? 360 : 1230)}))
    },
    toggleSlideStep: (step) => {
        step === "next" && set((state) => ({slideStep: state.slideStep + 1}))
        step === "prev" && set((state) => ({slideStep: state.slideStep - 1}))
    }
}))