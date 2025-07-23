export interface IPopup {
    showPopup: boolean,
    openPopup: () => void,
    closePopup: () => void
}

export interface IMenu {
    showMenu: boolean,
    openMenu: () => void,
    closeMenu: () => void
}

export interface IAlerts {
    showAlertDone: boolean,
    showAlertError: boolean,
    showAlertErrorPhone: boolean,
    toggleAlertDone: () => void,
    toggleAlertError: () => void,
    toggleAlertErrorPhone: () => void
}

export interface IReviewsSlider {
    slidePos: number,
    slideStep: number,
    toggleSlidePos: (step: string, isMobile: boolean) => void,
    toggleSlideStep: (step: string) => void,
}