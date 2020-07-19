import React from 'react';

import './contacts.scss'

const telNumber = '+07-913-378-9295'
const number = '+7 913 378 9295'
const viberNumber = '%2B7(913)3789295'
const whatsappNumber = '79133789295'
const telegramNumber = '79133789295'

const Contacts = ({phoneClassName}) => <div className="contacts">
    <div className={`contacts__phone ${phoneClassName}`}>
        <a className="contacts__phone-number" href={`tel:${telNumber}`}>{number}</a>
        <span className="contacts__phone-description">нажмите на телефон, чтобы позвонить</span>
    </div>
    <div className="contacts__social">
        <a href={`whatsapp://send?phone=${whatsappNumber}`} className="contacts__whatsapp">WhatsApp</a>
        <a href={`viber://add?number=${viberNumber}`} className="contacts__viber">Viber</a>
        <a href={`tg://msg?to=${telegramNumber}`} className="contacts__telegram">Telegram</a>
    </div>
</div>

export default Contacts
