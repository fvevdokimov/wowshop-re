import {useCart} from "../utils/use-cart";
import {groupBy} from "../utils/groupby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import {default as DesctopNav} from "../components/desctopNav";
import {default as MobileNav} from "../components/mobileNav";
import {default as CatMobileHeader} from "../components/catMobileHeader";
import Item from "../components/item";
import {Subscribe} from "../components/subscribe";
import {SocialButtons} from "../components/social";
import React, {useEffect, useLayoutEffect, useState} from "react";
import {getStoredNavigation, storeNavigation} from "../utils/stored-nav";
import {navigate} from "gatsby";

export const CatalogPage = ({data, type, season}) => {
    const {cartItems,
        addToCart,
        removeFromCart,
        changeCartItem} = useCart()

    useLayoutEffect(() => {
        const {open} = window.history.state;
        if(open) {
            navigate(open, {state:{modal: true}})
        }
    }, [])
    
       
    const headerTypeField = type === 'boys' ? 'fullnameboy' : 'fullnamegirl';

    const changeMale_male = type === 'boys' ? 'girls' : 'boys';
    const changeMale_season = season === 'fallspring' ? 'fall-spring' : 'winter';
    const changeMaleUrl = changeMale_male + '/' + changeMale_season;

    const [isCartOpen, setCartOpen] = useState(false);
    const handleCartClick = (e) => { setCartOpen(!isCartOpen) ; console.log('true')};

    const [isMenuOpen, setMenuOpen] = useState(false);
    const handleMenuClick = (e) => { setMenuOpen(!isMenuOpen) ; console.log('menu')};

    const filter = ({node}) => ['any', type].indexOf(node.for) !== -1 && (!season || !node.seasons || node.seasons === season)
    const itemGroups = groupBy(data.allStrapiItem.edges.filter(filter), ({node}) => node.type.id)
    useEffect(() => {
        storeNavigation(`${type}/${season === 'fallspring' ? 'fall-spring' : 'winter'}`)
    }, [])

    // Вывод мобильных и десктопных элементов
    const [isMobile, setScreenType] = useState(window.innerWidth <= 650)
    setInterval(() => {
        const windowNow = window.innerWidth <= 650
        if (isMobile !== windowNow) {
            setScreenType(windowNow)
        } 
    }, 250);

    //isMobile === true ? setScreenType(true) : setScreenType(false)
    
    //var isMobile = window.innerWidth <= 650 ? true : false
    // Выбор навигации
    const Nav = isMobile ? ( MobileNav ) : ( DesctopNav )
    // Вывод отступа для каталога
    const Spacer = !isMobile ? ( <hr className="spacer"/> ) : ''
    const ItemsHeader = isMobile ? ( CatMobileHeader ) : ""
    
   // счетчик корзины
   var cartCounter = Object.keys(cartItems).length
   const cartIsHidden = cartCounter === 0 ? true : false
   // if (cartIsHidden) {
   //  setCartOpen(false);
   // }
   
    return <Layout>

        <SEO title="Каталог"/>
        <Nav
            type={type}
            typeName={data.allStrapiType.edges}
            menu={data.file}
            cartItems={cartItems}
            items={data.allStrapiItem.edges}
            changeCartItem={changeCartItem}
            bannerFixed={data.banner.childImageSharp.fixed}
            bannerMobile={data.banner_mobile.childImageSharp.fixed}
            season={season}
            seasonUrl={'/'+ type + '/' + (season === 'fallspring' ? 'fall-spring' : 'winter')  + '#type_'}
            cartIsHidden = {cartIsHidden}
            cartCounter = {cartCounter}
            changeMaleUrl = {changeMaleUrl}
            isCartOpen = {isCartOpen}
            handleCartClick = {handleCartClick}
            isMenuOpen = {isMenuOpen}
            handleMenuClick = {handleMenuClick}
        />
        {console.log()}
        {itemGroups.map(group => <>
            <a name={`Type_${group[0].node.type.id}`}/>
            {!isMobile ? ( <hr className="spacer"/> ) : ''}
            
            
            {!isMobile ? <h2 className="items-header">{group[0].node.type[headerTypeField]}</h2> : ""}
            <div className="items-grid">
                <ItemsHeader
                    header = {group[0].node.type[headerTypeField]}
                    type = {type}
                    season = {season}
                />
                {group.map(edge => <Item item={edge.node} addToCart={addToCart} key={edge.node.id}/>)}
            </div>
        </>)}
        <Subscribe/>
        <SocialButtons/>
    </Layout>
}
