import React, {useCallback, useEffect, useState} from "react"
import LayoutInfo from "../components/layout-info";
import {Link} from "gatsby";
import Layout from "../components/layout";
import Contacts from "../components/contacts";

const OrderComplete = ({data}) => {
    return <LayoutInfo>
        <h1>Как оплатить?</h1>
        <p>Принимаем оплату через Сбербанк Онлайн, дождитесь, когда мы с вами свяжемся, чтобы уточнить стоимость доставки и полную сумму к оплате.</p>
        <div className="fullscreen-info__bottom-nav-container">
            <h2 className="fullscreen-info__bottom-nav-info-title">Есть вопросы?</h2>
            <p className="fullscreen-info__bottom-nav-info-description">Позвоните нам или напишите в любой из этих мессенджеров!</p>
            <Contacts phoneClassName="contacts__phone-payment"/>
            <div className="fullscreen-info__bottom-nav">
                <Link to={'info-delivery'} className="fullscreen-info__bottom-nav-link">О доставке</Link>
                <Link to={'info-contacts'} className="fullscreen-info__bottom-nav-link">Контакты</Link>
            </div>
        </div>
    </LayoutInfo>
}


export default OrderComplete;
