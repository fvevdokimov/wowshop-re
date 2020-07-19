import React, {useCallback, useEffect, useState} from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Item from "../components/item"
import SEO from "../components/seo"
import {TextInput} from "../components/text-input";
import CheckoutItem from "../components/checkoutitem";
import {PrimaryButton} from "../components/primary-button";
import '../components/checkout.scss'
import {Back} from "../components/icons";
import {useCart} from "../utils/use-cart";
import {useInput} from "../utils/use-input";
import {useRequest} from "../utils/use-request";
import { navigate } from "gatsby"
import {getStoredNavigation} from "../utils/stored-nav";

const IndexPage = ({data}) => {
    const {cartItems, clearCart} = useCart()

    const itemMap = new Map(data.allStrapiItem.edges.map(item => [item.node.id, item.node]))
    const cartItemList = Object.entries(cartItems).map(([id, {count, sizeId}]) => ({item: itemMap.get(id), count, sizeId}))

    const [fullName, setFullName] = useInput('');
    const [phone, setPhone] = useInput('');
    const [city, setCity] = useInput('');
    const [address, setAddress] = useInput('');
    const [email, setEmail] = useInput('');

    // TODO: Size selection
    const orderItems = cartItemList.map(({item, count, sizeId}) => ({itemId: +item.id.substring(5), sizeId, count}));

    const [status, request] = useRequest('https://wowshop-api.wave909.com/order', 'POST', {
        fullName, phone, city, address, email, orderItems
    })

    useEffect(() => {
        if(status.statusCode === 200) {
            clearCart();
            navigate('order-complete');
        }
    }, [status])

    const filled = !!(fullName && phone && city && address && email)

    return <Layout>
        <SEO title="Home"/>
        <div className="checkout__nav"><Link to={getStoredNavigation()}><Back color="#87338B"/> Вернуться к покупкам</Link></div>
        <div className="checkout">
            <div className="checkout__items">
                <h2>В заказе</h2>
                {console.log(cartItemList)}
                {cartItemList.map(({item, count, sizeId}) =>
                    <CheckoutItem
                        item={item}
                        sizeId={sizeId}
                        count={count}/>)}

                <div className="checkout__total-label">
                    Итого:
                    <span className="cart__total-number">
                                {cartItemList.map(({item, count}) => item.price * count)
                                    .reduce((a,b) => a+b, 0)}.-
                            </span>
                </div>
            </div>
            <div className="checkout__form">
                <h1>Оформление заказа</h1>
                <p className="checkout__tip">Заполните все поля, для завершения</p>
                <TextInput placeholder="ФИО" value={fullName} onChange={setFullName}/>
                <TextInput placeholder="Телефон" value={phone} onChange={setPhone} faded={!fullName} />
                <TextInput placeholder="Город доставки" value={city} onChange={setCity} faded={!phone} />
                <TextInput placeholder="Адрес доставки" value={address} onChange={setAddress} faded={!city} />
                <TextInput placeholder="Email" value={email} onChange={setEmail} faded={!address} />
                <p className="checkout__privacy-policy__description">Нажимая «Отправить заказ» вы соглашаетесь с <span className="checkout__privacy-policy__link">политикой конфиденциальности</span></p>
                <PrimaryButton disabled={!filled || status.loading} onClick={request}>Отправить заказ<div className="send"/></PrimaryButton>
            </div>
        </div>
    </Layout>
}

export default IndexPage


export const pageQuery = graphql`
    query CheckoutQuery {
        allStrapiItem {
            edges {
                node {
                    id
                    name
                    price
                    for      
                    images {
                        localFile {
                           publicURL
                           childImageSharp {
                               fluid(maxWidth: 400, maxHeight: 400) {
                                   ...GatsbyImageSharpFluid_noBase64
                               }
                           }
                        }
                    }
                    type {
                        id
                        shortname
                        fullnameboy
                        fullnamegirl
                    }
                    sizetable {
                        id
                        size
                        armlength
                        ziplength
                        seamlength
                    }
                }
            }
        }
        allStrapiType {
            edges {
                node {
                    id
                    shortname
                    fullnameboy
                    fullnamegirl
                }
            }
        }
        banner: file(relativePath: { eq: "banner.png" }) {
           childImageSharp {
               fixed(width: 787, height: 310) {
                   ...GatsbyImageSharpFixed
               }
           }
        }
    }
    
`
