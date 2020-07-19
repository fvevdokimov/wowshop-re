import React from "react"
import './info-page.scss'
import Layout from "./layout";
import {Back, CloseWithLabel, CloseWithLabelLink} from "./icons";
import {Link} from "gatsby";
import {getStoredNavigation} from "../utils/stored-nav";

const info = {

    order : '',
    
}
let text = {
    contacts : {
        header : 'Контакты',
        description : 'Мы всегда рады помочь вам выбрать товар и ответить на все интересующие вас вопросы о товаре и условиях оплаты, доставки, возврата товара.'
    },
    pay : {
        header : 'Оплата',
        description : 'Принимаем оплату через Сбербанк Онлайн, дождитесь, когда мы с вами свяжемся, чтобы уточнить стоимость доставки и полную сумму к оплате.'
    },
    delivery : {
        header : 'Доставка',
        description : 'Мы доставляем товары Почтой России, СДЕКом, DPD, и другими доставками. Вместе с вами выберем наиболее удобный и доступных сопособ доставки.'
    },
    order : {
        header : 'Спасибо, заказ отправлен!',
        description : 'Скоро свяжемся с вами для уточнения деталей, в рабочее время это ожидание занимает не более 30 минут.'
    }
},
    address = 'г. Новосибирск, ул. Немировича Данченко 344, корп. 299/21, оф. 3011',
    phone = '+7 913 378 9295',
    wa = 'whatsapp://send?phone=79133789295',
    viber = 'viber://add?number=%2B7(913)3789295',
    tg = 'tg://msg?to=79133789295';

var isMobile = window.innerWidth <= 650 ? true : false

const Nav = ({}) => {
    return <>
        <div className="info-page__nav">
            <Link to={getStoredNavigation()}>
                <div><Back color="white"/> Вернуться к покупкам</div>
            </Link>
            <CloseWithLabelLink style={{marginLeft: 'auto'}} to={getStoredNavigation()} color="white" className="fullscreen-info__nav-back"/>
        </div>
    </>
}

const Content = ({pageType}) => {
    let header, description;
    switch (pageType) {
        case 'contacts':
            header = text.contacts.header
            description = text.contacts.description
        break;
        case 'pay':
            header = text.pay.header
            description = text.pay.description
        break;
        case 'delivery':
            header = text.delivery.header
            description = text.delivery.description
        break;
        case 'order':
            header = text.order.header
            description = text.order.description
        break;
    }
    return <> 
        <h1>{header}</h1>
        <p>{description}</p>
    </>
}

const Address = ({pageType}) => {
    if(pageType === 'contacts') {
        return <>
            <div className="address">
                <svg width="21" height="25" viewBox="0 0 21 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M4.78699 5.31702C6.28728 3.81673 8.32212 2.97388 10.4438 2.97388C12.5656 2.97388 14.6004 3.81673 16.1007 5.31702C17.601 6.81731 18.4438 8.85215 18.4438 10.9739C18.4438 14.0719 16.4281 17.0781 14.2179 19.4111C13.1332 20.556 12.0452 21.4933 11.2272 22.1447C10.9227 22.3871 10.6568 22.5891 10.4438 22.7465C10.2309 22.5891 9.96496 22.3871 9.66052 22.1447C8.84252 21.4933 7.75446 20.556 6.6698 19.4111C4.45959 17.0781 2.44385 14.0719 2.44385 10.9739C2.44385 8.85215 3.2867 6.81731 4.78699 5.31702ZM9.88861 24.8056C9.88889 24.8058 9.88915 24.8059 10.4438 23.9739L9.88915 24.8059C10.225 25.0299 10.6626 25.0299 10.9985 24.8059L10.4438 23.9739C10.9985 24.8059 10.9988 24.8058 10.9991 24.8056L10.9998 24.8051L11.0019 24.8037L11.0086 24.7992L11.0315 24.7837C11.051 24.7705 11.0788 24.7515 11.1143 24.7269C11.1853 24.6777 11.2874 24.606 11.4161 24.5131C11.6733 24.3273 12.0375 24.0561 12.473 23.7093C13.3425 23.0169 14.5045 22.0167 15.6698 20.7866C17.9596 18.3696 20.4438 14.8758 20.4438 10.9739C20.4438 8.32171 19.3903 5.77817 17.5149 3.90281C15.6396 2.02745 13.096 0.973877 10.4438 0.973877C7.79168 0.973877 5.24814 2.02745 3.37278 3.90281C1.49742 5.77817 0.443848 8.32171 0.443848 10.9739C0.443848 14.8758 2.92811 18.3696 5.2179 20.7866C6.38324 22.0167 7.54518 23.0169 8.41467 23.7093C8.85021 24.0561 9.21439 24.3273 9.47164 24.5131C9.60031 24.606 9.70238 24.6777 9.77341 24.7269C9.80892 24.7515 9.83669 24.7705 9.85617 24.7837L9.87908 24.7992L9.88575 24.8037L9.88786 24.8051L9.88861 24.8056ZM8.44385 10.9739C8.44385 9.86931 9.33928 8.97388 10.4438 8.97388C11.5484 8.97388 12.4438 9.86931 12.4438 10.9739C12.4438 12.0784 11.5484 12.9739 10.4438 12.9739C9.33928 12.9739 8.44385 12.0784 8.44385 10.9739ZM10.4438 6.97388C8.23471 6.97388 6.44385 8.76474 6.44385 10.9739C6.44385 13.183 8.23471 14.9739 10.4438 14.9739C12.653 14.9739 14.4438 13.183 14.4438 10.9739C14.4438 8.76474 12.653 6.97388 10.4438 6.97388Z" fill="#F2F2F2"/>
                </svg>
                <span>{address}</span>
            </div>
        </>
    }
}

const PhoneBlock = ({pageType}) => {
    const Phone = ({}) => {
        return <>
            <div className="contacts__phone">
                <a className="contacts__phone-number" href={`tel:${phone}`}>{phone}</a>
                <span className="contacts__phone-description">нажмите на телефон, чтобы позвонить</span>
            </div>
        </>
    }
    const Messangers = ({}) => {
        return <>
            <div class="contacts__social">
                <Link to={wa} className="contacts__whatsapp">WhatsApp</Link>
                <Link to={viber} className="contacts__viber">Viber</Link>
                <Link to={tg} className="contacts__telegram">Telegram</Link>
            </div>
        </>
    }

    return <> 
        <h2>Есть вопросы?</h2>
        <p>Позвоните нам или напишите в любой из этих мессенджеров!</p>
        {(pageType === 'contacts') ? <Phone/> : ''}
        <Messangers/>
    </>
}

const Links  = ({pageType}) => {
    return <>
        <div class="pages-nav">
            {pageType !== "delivery" ? <Link to="/info-delivery">О доставке</Link> : ''}
            {pageType !== "pay" ? <Link to="/info-payment">Об оплате</Link> : ''}
            {pageType !== "contacts" ? <Link to="/info-contacts">Контакты</Link> : ''}
        </div>
    </>
}

const Contacts = ({pageType}) =>
<Layout
    className = 'violet_background'
    >
    <div className={"info-page " + (isMobile ? 'mobile' : 'desctop')}>
        <Nav/>
        <div className="info-page__content">
            <div className="info-page__content--block">
                <Content
                    pageType = {pageType}
                />
                <Address
                    pageType = {pageType}
                />
                {isMobile ? <Links pageType = {pageType}/>: ""}
            </div>
            <div className="info-page__content--block">
                <PhoneBlock
                    pageType = {pageType}
                />
            </div>
        </div>
        {!isMobile ? <Links pageType = {pageType}/>: ""}
    </div>
</Layout>

export default Contacts;


