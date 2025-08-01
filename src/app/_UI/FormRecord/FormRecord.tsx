"use client"

import { useForm } from 'react-hook-form';
import { useAlerts } from "@/app/_Store/store"
import { IMaskInput } from "react-imask";
import { useState } from 'react';

// import axios from 'axios'

import "./FormRecord.scss"

// const TOKEN = "7596491276:AAF8GV4jU3zZRzmvGfNCQqHg9yoQtvzbnnk";
// const CHAT_ID = "-1002876020412";
// const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

type FormData = {
    name: string,
    phone: string,
}

interface Props {
  typedClass: string
}

export default function FormRecord({ typedClass }: Props) {

    const [approval, setApproval] = useState<boolean>(false)

    const { toggleAlertError, toggleAlertDone } = useAlerts()

    const { register, handleSubmit, reset } = useForm<FormData>()

    const phone = register("phone");

    const sendForm = (data: FormData) => {
        if (data.name === "" || data.phone?.length !== 18) {
            toggleAlertError()
            return;
        }
        questionSubmit(data);
        toggleAlertDone()
    };

    const questionSubmit = (data: FormData) => {
        const message_tg = [
            `<b>Заявка для созвона</b>\n`,
            `<b>Имя:</b> ${data.name}\n`,
            `<b>Номер:</b> ${data.phone}\n`,
        ];
        sendMessage(message_tg);
        reset();
    };

    const sendMessage = (message_tg: string[]) => {
        let message = "";
        for (let text_tg of message_tg) {
            message += text_tg;
        }
        console.log(message);

        // axios.post(URI_API, {
        //     chat_id: CHAT_ID,
        //     parse_mode: "html",
        //     text: message
        // }).catch ((err) => alert(err))
       
    };

    return (
        <form className={typedClass} onSubmit={handleSubmit(sendForm)}>
            <img className={`${typedClass}__note`} src="img/Section-7/excursion-form-img.png" alt="Form-fon" />
            <h5 className={`${typedClass}__title-h5`}>Записаться на онлайн-экскурсию</h5>
            <div className={`${typedClass}__inputs`}>
                <label className={`${typedClass}__label`}>
                    <span className={`${typedClass}__label-title`}>Ваше имя</span>
                    <input
                        className={`${typedClass}__input`}
                        type="text"
                        placeholder="Как Вас зовут?"
                        {...register("name")}
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
                <button
                    className={`${typedClass}__button`} 
                    type="submit"
                    disabled={!approval}
                >
                    <img src="/img/Icons/pen_icon.svg" alt="" />
                    <span>Записаться</span>
                </button>
                <p className={`${typedClass}__approval`}>
                    <input
                        checked={approval}
                        onChange={(e) => setApproval(e.target.checked)} 
                        type="checkbox" 
                    />
                    <span>Согласен на <a href="/">обработку персональных данных</a></span>
                </p>
            </div>
        </form>
    )
}
