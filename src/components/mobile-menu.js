import './mobile-menu.css'
import React, {useCallback, useState} from "react";
import {Link} from "gatsby";
import LayoutInfo from "./layout-info";
import {useCart} from "../utils/use-cart";

export const MobileMenu = ({cartItems}) => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = useCallback(() => setIsOpen(!isOpen), [isOpen, setIsOpen])
    const hasCart = Object.values(cartItems).length > 0;

    return <>
        <div className={`menu-mobile__button ${hasCart ? 'menu-mobile__button__left' : ''}  ${isOpen ? 'menu-mobile__button__open' : ''}`} onClick={toggle}/>
        <div className={`menu-mobile ${hasCart ? 'menu-mobile__left' : ''} ${isOpen ? 'menu-mobile__open' : ''}`}>
            <div className="menu-mobile__nav">
                <Link to={'info-payment'} className="menu-mobile__nav__link">Как оплатить?</Link>
                <Link to={'info-delivery'} className="menu-mobile__nav__link">О доставке</Link>
                <Link to={'info-contacts'} className="menu-mobile__nav__link">Контакты</Link>
            </div>

            <div className="menu-mobile__nav-catalog">
                <div className="menu-mobile__nav-catalog__links">
                    <span className="menu-mobile__boys"><Link to="/boys/fall-spring">Мальчикам</Link></span>
                    <Link to="/boys/fall-spring#Type_1">Одежда</Link>
                    <Link to="/boys/fall-spring#Type_2">Обувь</Link>
                    <Link to="/boys/fall-spring#Type_3">Аксессуары</Link>
                </div>
                <div className="menu-mobile__nav-catalog__delim"/>
                <div className="menu-mobile__nav-catalog__links">
                    <span className="menu-mobile__girls"><Link to="/girls/fall-spring">Девочкам</Link></span>
                    <Link to="/girls/fall-spring#Type_1">Одежда</Link>
                    <Link to="/girls/fall-spring#Type_2">Обувь</Link>
                    <Link to="/girls/fall-spring#Type_3">Аксессуары</Link>
                </div>
            </div>
        </div>
    </>
}
