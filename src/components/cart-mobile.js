import React, {useEffect, useLayoutEffect, useState} from "react";
import {Link} from "gatsby";
import CartItem from "./cartitem-mobile";


const CartItems = ({cartItemList, changeCartItem, closeCart}) => <div className="items">

        {cartItemList.map(({item, count, sizeId}) =>
            <CartItem
                item={item}
                count={count}
                sizeId={sizeId}
                changeCartItem={changeCartItem}
                key={item.id}/>)}
    </div>

const Cart = ({cartItems, items, changeCartItem, bannerFixed, bannerMobile}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItemsCount, setCartItemsCount] = useState(null);
    const [shouldAnimate, setShouldAnimate] = useState(false);

    const itemMap = new Map(items.map(item => [item.node.id, item.node]))
    const cartItemList = Object.entries(cartItems)
        .map(([id, {count, sizeId}]) => ({item: itemMap.get(id), count, sizeId}))
        .filter(({item}) => !!item)

    useEffect(() => {
        const oldCount = cartItemsCount;
        const newCount = cartItemList.map(({count}) => count).reduce((a,b) => a + b, 0);
        if(oldCount !== null && oldCount !== newCount) {
            setShouldAnimate(true);
        }
        setCartItemsCount(newCount);
        if(newCount === 0) {
            setIsCartOpen(false)
        }
    }, [cartItems, cartItemsCount, setCartItemsCount, setIsCartOpen]);

    

    useLayoutEffect(() => {
        if(window) {
            window.document.documentElement.dataset.isCartOpen = isCartOpen.valueOf();
        }
    }, [isCartOpen])

    return (
        <>
            
            <div className="hidden-cart">
                <div className="header">
                        <h3>Корзина</h3>
                </div>
              
                <CartItems
                    cartItemList={cartItemList}
                    changeCartItem={changeCartItem}/>
                
                <div className="cart-footer">
                    <div className="cart-total">
                        <span>Итого:</span><span>{cartItemList.map(({item, count}) => item.price * count)
                                    .reduce((a,b) => a+b, 0)}.-</span>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Cart;
