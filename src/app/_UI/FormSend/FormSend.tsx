"use client"

import { useForm } from 'react-hook-form';
import { useAlerts } from "@/app/_Store/store"
import { IMaskInput } from "react-imask";
import { useState } from 'react';

// import axios from 'axios'

import "./FormSend.scss"

// const TOKEN = "7596491276:AAF8GV4jU3zZRzmvGfNCQqHg9yoQtvzbnnk";
// const CHAT_ID = "-1002876020412";
// const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

type FormData = {
    name: string,
    phone: string,
}

interface Props {
  typedClass: string,
  isPopup: boolean
}

export default function FormSend({ typedClass, isPopup}: Props) {

    const [approval, setApproval] = useState<boolean>(false)

    const { toggleAlertError, toggleAlertDone } = useAlerts()

    const { register, handleSubmit, reset } = useForm<FormData>()

    const phone = register("phone");

    const sendForm = (data: FormData) => {
        if (data.name === "" || data.phone?.length !== 18){
            toggleAlertError()
            return
        }
        questionSubmit(data)
        toggleAlertDone()
    }
    
    const questionSubmit = (data: FormData) => {
        const message_tg = [
            `<b>Заявка для созвона</b>\n`,
            `<b>Имя:</b> ${data.name}\n`,
            `<b>Номер:</b> ${data.phone}\n`
        ]
        sendMessage(message_tg)
        reset()
    }

    const sendMessage = (message_tg: string[]) => {
        let message = ""
        for (let text_tg of message_tg) {
          message += text_tg
        }
        console.log(message)

        // axios.post(URI_API, {
        //   chat_id: CHAT_ID,
        //   parse_mode: "html",
        //   text: message
        // }).catch ((err) => alert(err))
        
    }

    return (
        <form className={typedClass} onSubmit={handleSubmit(sendForm)}>
            <div className={`${typedClass}__inputs-row`}>
                <label className={`${typedClass}__label`}>
                    <span className={`${typedClass}__label-title`}>Ваше имя</span>
                    <input
                        className={`${typedClass}__input`} 
                        type="text"
                        placeholder="Как Вас зовут?"  
                        {...register('name')}  
                    />
                </label>
                <label className={`${typedClass}__label`}>
                    <span className={`${typedClass}__label-title`}>Телефон</span>
                    <IMaskInput
                        className={`${typedClass}__input`}
                        type="tel"
                        mask={"+{7} (900) 000-00-00"}
                        placeholder="+7 (___) ___-__-__"
                        name={phone.name}
                        onChange={phone.onChange}
                        onBlur={phone.onBlur}
                        inputRef={phone.ref}
                    />
                </label>
            </div>
            <div className={`${typedClass}__inputs-row`}>
                <button 
                    className={`${typedClass}__button`} 
                    type="submit"
                    disabled={!approval}
                >
                    <img src="img/Icons/send_icon.svg" alt="Отправить" />
                    <span>Отправить заявку</span>
                </button>
                <p className={`${typedClass}__approval`}>
                    <input
                        checked={approval}
                        onChange={(e) => setApproval(e.target.checked)} 
                        type="checkbox" 
                    />
                    {isPopup ? (
                        <span>Согласен на <a href="/">обработку персональных данных</a></span>
                    ) : (
                        <span>Нажимая кнопку «Отправить заявку»,<br/>вы соглашаетесь на<br/><a href="/">обработку персональных данных</a></span>
                    )}
                    
                </p>
            </div>
        </form>
    )
}
