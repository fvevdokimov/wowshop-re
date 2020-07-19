import {Link} from "gatsby";
import { graphql } from "gatsby"
import React from "react";
import Img from "gatsby-image"

import "./menu.scss";
import "./menuGirls.css";
import Cart from "./cart";
import {LinkMenu} from "./menuBoys";

const Menu = ({type, typeName, cartItems, items, removeFromCart, changeCartItem, bannerFixed, bannerMobile, season}) => (
    <div className='menuBlock'>

        <Link to="/"><div className='menuLogo'/></Link>
        <div className='flexBox'>
            <div className='bottomBlock'>
                <Link to="/girls/fall-spring" className='menuTitleGirls'>Девочкам</Link>
                {typeName.map(({node})=> <a href={`#${node.id}`} className='menuTypeGirls'>{node.shortname}</a>)}
            </div>
            <p className='seasonFilter'>
                <Link to="/girls/winter" className={`seasonLink ${season === 'winter' ? 'active' : ''}`}>зимняя</Link> /
                <Link to="/girls/fall-spring" className={`seasonLink ${season === 'fallspring' ? 'active' : ''}`}>демисезонная</Link>
            </p>
        </div>

        <div className='menuRightBlock'>
            <Link to="/boys/fall-spring" className='menuRightElement boys'>Мальчикам</Link>
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
                bannerMobile={bannerMobile}
                bannerFixed={bannerFixed}/>
        </div>

    </div>
    )

export default Menu;

// .map(({node}) => <a href={`#${node.id}`} className=''>{node.shortname}</a
