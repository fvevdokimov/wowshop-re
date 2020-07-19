import React from "react"
import { Link } from "gatsby"

import '../components/intro.scss'

import Layout from "../components/layout"
import {SocialButtons} from "../components/social";


const SecondPage = () => (
    <Layout>
        <div className="intro">
            <div className="intro__logo"/>
            <h1 className="intro__header">
                Покупайте детскую одежду по <span className="intro__header-highlight">очень хорошим ценам!</span>
            </h1>
            <h2 className="intro__collection__winter">Зимняя коллекция 2019-2020</h2>

            <div className="intro__link-row">
                <Link to="/boys/fall-spring#Type_3">Аксессуары</Link>
                <Link to="/boys/fall-spring#Type_2">Обувь</Link>
                <Link to="/boys/fall-spring#Type_1">Одежда</Link>
                <span className="intro__boys"><Link to="/boys/fall-spring">Мальчикам</Link></span>
                <span className="intro__girls"><Link to="/girls/fall-spring">Девочкам</Link></span>
                <Link to="/girls/fall-spring#Type_1">Одежда</Link>
                <Link to="/girls/fall-spring#Type_2">Обувь</Link>
                <Link to="/girls/fall-spring#Type_3">Аксессуары</Link>
            </div>

            <div className="intro__info-row">
                <Link to={'info-payment'}>Как оплатить?</Link>
                <Link to={'info-delivery'}>О доставке</Link>
                <Link to={'info-contacts'}>Контакты</Link>

            </div>
            <div className="intro__social">
                <SocialButtons/>
            </div>
        </div>
    </Layout>
)

export default SecondPage
