import React, {useState, useEffect, useCallback} from "react"

import './subscribe.css';
import {TextInput} from "./text-input";
import {useInput} from "../utils/use-input";
import {useRequest} from "../utils/use-request";
import {PrimaryButton} from "./primary-button";

export const Subscribe = () => {
    const [email, setEmail] = useInput('')
    const [phone, setPhone] = useInput('')

    const [status, request] = useRequest('https://wowshop-api.wave909.com/subscribe', 'POST', {
        email, phone
    })

    return <div className='wholeBlock'>
        <span className='header'> Хотите больше выбора?</span>
        <span className='underHeader'> Дайте свои контакты, и мы сообщим вам о новых поступлениях!</span>
        <span className='underHeader'>Обещаем, что писать будем только по делу!</span>
        <div className='phoneOrEmail'>
            <TextInput placeholder="Email" value={email} onChange={setEmail}/>
            <span className='or'> или </span>
            <TextInput placeholder="Телефон" value={phone} onChange={setPhone}/>
        </div>
        <PrimaryButton onClick={request} className="button" disabled={status.loading}> Узнавать об обновлениях</PrimaryButton>
        <span className='agree'> Нажимая «Узнавать об обновлениях» вы соглашаетесь с <a href="URL"> политикой конфиденциальности</a> </span>
    </div>
}
