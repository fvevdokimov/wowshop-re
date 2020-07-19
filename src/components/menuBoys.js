import {Link} from "gatsby";
import { graphql } from "gatsby"
import React, {useCallback, useState} from "react";
import Img from "gatsby-image"

import "./menu.scss";
import "./menuBoys.css";
import Cart from "./cart";
import Layout from "./layout";

export const LinkMenu = ({children}) => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = useCallback(() => setIsOpen(!isOpen), [isOpen, setIsOpen])

    return <>
        <div className={`menuLinks__open-button ${isOpen ? 'open' : ''}`} onClick={toggle}><svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.38184 7.85352H19.3818" stroke="#87338B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M1.38184 1.85352H19.3818" stroke="#87338B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M1.38184 13.8535H19.3818" stroke="#87338B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
            меню</div>
        <div className={`menuLinks ${isOpen ? 'open' : ''}`}>
            {children}
        </div>
        </>
}

const Menu = ({type, typeName, cartItems, items, removeFromCart, changeCartItem, bannerFixed, bannerMobile, season}) => (
    <div className='menuBlock'>

        <Link to="/"><div className='menuLogo'/></Link>
        <div className='flexBox'>
            <div className='bottomBlock'>
                <Link to="/boys/fall-spring" className='menuTitleBoys'>Мальчикам</Link>
                {typeName.map(({node})=> <a href={`#${node.id}`} className='menuTypeBoys'>{node.shortname}</a>)}
            </div>
            <p className='seasonFilter'>
                <Link to="/boys/winter" className={`seasonLink ${season === 'winter' ? 'active' : ''}`}>зимняя</Link> /
                <Link to="/boys/fall-spring" className={`seasonLink ${season === 'fallspring' ? 'active' : ''}`}>демисезонная</Link>
            </p>
        </div>

        <div className='menuRightBlock'>
            <Link to="/girls/fall-spring" className='menuRightElement girls'>Девочкам</Link>
            <LinkMenu>
                <Link to="info-payment" className='menuRightElement'>Как оплатить?</Link>
                <Link to="info-delivery" className='menuRightElement'>О доставке</Link>
                <Link to="info-contacts" className='menuRightElement'>Контакты</Link>
            </LinkMenu>
            <Cart
                cartItems={cartItems}
                items={items}
                removeFromCart={removeFromCart}
                changeCartItem={changeCartItem}
                bannerFixed={bannerFixed}
                bannerMobile={bannerMobile}/>
        </div>

    </div>
    )

export default Menu;

// .map(({node}) => <a href={`#${node.id}`} className=''>{node.shortname}</a
