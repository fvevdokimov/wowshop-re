import {Link} from "gatsby";
import React, {useState} from "react";
import Img from "gatsby-image"
import './cartitem.css'
import nodeToSlug from "../utils/url-slug";

const CheckoutItem = ({item, count, sizeId}) => {
    sizeId = sizeId === 1 ? item.sizetable[0].id : sizeId;
    return <>
            <div key={item.id} style={{display: 'flex', alignItems: 'center', marginBottom: 16}}>
            {console.log(item.sizetable, sizeId)}
            <Img fixed={item.images[0].localFile.childImageSharp.fluid} style={{width: 92, height: 92, borderRadius: 10, marginRight: 20}}/>
            <div style={{flex: 1}}>
                <span className="checkout-item__header">
                    {item.name}
                </span>
                
                <div className="checkout-item__controls-row">
                    <span><b>Размер:</b> {item.sizetable.find(({id}) => id === sizeId).size}</span>
                </div>
                <div className="checkout-item__controls-row">
                    <span><b>{count} шт.</b></span>
                    <span>{item.price}.-</span>
                    <div className="checkout-item__total">{item.price * count}.-</div>
                </div>
            </div>
        </div>
    </>
}

export default CheckoutItem;