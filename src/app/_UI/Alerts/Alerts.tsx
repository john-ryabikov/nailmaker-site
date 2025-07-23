import { useAlerts } from "@/app/_Store/store";

import "./Alerts.scss"

export default function Alerts() {

    const { showAlertDone, showAlertError, showAlertErrorPhone } = useAlerts();

    const alerts = [
        {
            id: "Alert-done",
            showAlert: showAlertDone,
            icon: "img/Icons/done_icon.svg",
            text: "Заявка успешно отправлена!"
        },
        {
            id: "Alert-err",
            showAlert: showAlertError,
            icon: "img/Icons/warning_icon.svg",
            text: "Не все данные введены!"
        },
        {
            id: "Alert-err-tel",
            showAlert: showAlertErrorPhone,
            icon: "img/Icons/warning_icon.svg",
            text: "Номер телефона невалиден!"
        },
    ]

    return (
        <>
          {alerts.map((alert, i) => (
              <div key={i} className={`alert ${alert.showAlert ? "active" : ""}`}>
                  <img src={alert.icon} alt="Alert-icon" />
                  <span>{alert.text}</span>
              </div>
          ))}
        </>
    )
}