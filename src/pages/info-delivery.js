import React, {useCallback, useEffect, useState} from "react"
import LayoutInfo from "../components/layout-info";
import {Link} from "gatsby";
import Layout from "../components/layout";
import Contacts from "../components/contacts";

const OrderComplete = ({data}) => {
    return <LayoutInfo>
        <h1>Доставка</h1>
        <p>Мы доставляем товары Почтой России, СДЕКом, DPD, и другими доставками. Вместе с вами выберем наиболее удобный и доступных сопособ доставки.</p>

        <div className="fullscreen-info__bottom-nav-container">
            <h2 className="fullscreen-info__bottom-nav-info-title">Есть вопросы?</h2>
            <p className="fullscreen-info__bottom-nav-info-description">Позвоните нам или напишите в любой из этих мессенджеров!</p>
            <Contacts phoneClassName="contacts__phone-delivery"/>
            <div className="fullscreen-info__bottom-nav">
                <Link to={'info-payment'} className="fullscreen-info__bottom-nav-link">Об оплате</Link>
                <Link to={'info-contacts'} className="fullscreen-info__bottom-nav-link">Контакты</Link>
            </div>
        </div>
    </LayoutInfo>
}


export default OrderComplete;
