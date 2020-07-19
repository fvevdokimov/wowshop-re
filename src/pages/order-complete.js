import React, {useCallback, useEffect, useState} from "react"
import LayoutInfo from "../components/layout-info";
import {Link} from "gatsby";
import Layout from "../components/layout";
import Contacts from "../components/contacts";
import '../components/order-complete.css'
import { Subscribe } from "../components/subscribe"
import { OrderCompleteSocialButtons } from "../components/order-complete-social"

const OrderComplete = ({data}) => {
    return <LayoutInfo className="order-complete__container">
        <h1>Спасибо, заказ отправлен!</h1>
        <p>Скоро свяжемся с вами для уточнения деталей,
            в рабочее время это ожидание занимает не более 30 минут.</p>

        <div className="fullscreen-info__bottom-nav-container">
            <h2 className="fullscreen-info__bottom-nav-info-title">Хотите быстрее?</h2>
            <p className="fullscreen-info__bottom-nav-info-description">Напишите нам в любимый мессенджер!</p>
            <Contacts phoneClassName="contacts__phone-order-complete"/>
            <div className="fullscreen-info__bottom-nav">
                <Link to={'info-payment'} className="fullscreen-info__bottom-nav-link">Как оплатить?</Link>
                <Link to={'info-delivery'} className="fullscreen-info__bottom-nav-link">О доставке</Link>
                <Link to={'info-contacts'} className="fullscreen-info__bottom-nav-link">Контакты</Link>
            </div>
            <OrderCompleteSocialButtons/>
        </div>
    </LayoutInfo>
}


export default OrderComplete;
