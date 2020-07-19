import React, {useEffect, useLayoutEffect, useState} from "react";
import CartItem from "./cartitem";



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
                <div className="cart-header">
                    <div class="header">
                        <div class="icon-cart">
                            <svg width="24" height="24" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.70312 0.733398C1.15084 0.733398 0.703125 1.18111 0.703125 1.7334C0.703125 2.28568 1.15084 2.7334 1.70312 2.7334H4.00669L4.61975 5.7964C4.62388 5.82224 4.62899 5.84775 4.63506 5.87288L5.93812 12.3833L5.93821 12.3838C6.05542 12.9733 6.37617 13.5028 6.84435 13.8797C7.30986 14.2544 7.89165 14.4545 8.48896 14.4456H16.0617C16.659 14.4545 17.2408 14.2544 17.7063 13.8797C18.1746 13.5027 18.4954 12.973 18.6126 12.3833L18.6126 12.3833L18.614 12.3758L19.8633 5.82479C19.9191 5.53204 19.8415 5.22965 19.6515 5.00002C19.4615 4.77039 19.179 4.63747 18.881 4.63747H6.42746L5.80693 1.53714C5.71339 1.06978 5.30301 0.733398 4.82638 0.733398H1.70312ZM7.89951 11.9922L6.82776 6.63747H17.6723L16.6509 11.9937L16.6503 11.9964C16.6242 12.1246 16.5541 12.2397 16.4522 12.3217C16.3495 12.4044 16.221 12.4483 16.0893 12.4458L16.0701 12.4456H8.48059L8.46143 12.4458C8.32964 12.4483 8.20116 12.4044 8.09849 12.3217C7.99581 12.2391 7.92548 12.123 7.8998 11.9937L7.89951 11.9922ZM7.94963 17.5689C8.07069 17.5689 8.16882 17.4707 8.16882 17.3497C8.16882 17.2286 8.07069 17.1305 7.94963 17.1305C7.82858 17.1305 7.73045 17.2286 7.73045 17.3497C7.73045 17.4707 7.82858 17.5689 7.94963 17.5689ZM6.16882 17.3497C6.16882 16.3661 6.96612 15.5689 7.94963 15.5689C8.93315 15.5689 9.73045 16.3661 9.73045 17.3497C9.73045 18.3332 8.93315 19.1305 7.94963 19.1305C6.96612 19.1305 6.16882 18.3332 6.16882 17.3497ZM16.5386 17.5689C16.6596 17.5689 16.7578 17.4707 16.7578 17.3497C16.7578 17.2286 16.6596 17.1305 16.5386 17.1305C16.4175 17.1305 16.3194 17.2286 16.3194 17.3497C16.3194 17.4707 16.4175 17.5689 16.5386 17.5689ZM14.7578 17.3497C14.7578 16.3661 15.5551 15.5689 16.5386 15.5689C17.5221 15.5689 18.3194 16.3661 18.3194 17.3497C18.3194 18.3332 17.5221 19.1305 16.5386 19.1305C15.5551 19.1305 14.7578 18.3332 14.7578 17.3497Z"/>
                            </svg>
                        </div>
                        <h3>Корзина</h3>
                    </div>
                </div>
              
                <CartItems
                    cartItemList={cartItemList}
                    changeCartItem={changeCartItem}/>
                
                <div className="cart-footer">
                    <div className="cart-total">
                        <span>Итого:</span><span>{cartItemList.map(({item, count}) => item.price * count)
                                    .reduce((a,b) => a+b, 0)}.-</span>
                    </div>
                {/*<PrimaryButton className="cart__checkout" to="checkout">Оформить заказ<div className="send"/></PrimaryButton>*/}
            
                   
                    <a href="/checkout" className="btn checkout">
                        <span>Оформить заказ</span> 
                        <div className="icon-plane">
                            <svg width="23" height="23" viewBox="0 0 23 23" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M22.4073 0.488234C22.6308 0.711717 22.7264 1.01466 22.6941 1.30612C22.685 1.38783 22.6659 1.46863 22.6368 1.54653L15.6441 21.5257C15.5086 21.9127 15.1506 22.1778 14.741 22.1945C14.3313 22.2112 13.9529 21.9762 13.7864 21.6015L9.9426 12.9529L1.29406 9.10915C0.919381 8.94263 0.684318 8.56426 0.701032 8.15458C0.717745 7.7449 0.98285 7.38693 1.36985 7.25148L21.349 0.258785C21.4274 0.229446 21.5087 0.210282 21.5909 0.201294C21.6512 0.194659 21.7117 0.193577 21.7717 0.197882C22.0033 0.214378 22.2302 0.311162 22.4073 0.488234ZM17.8945 3.58681L4.41128 8.30595L10.4787 11.0026L17.8945 3.58681ZM11.8929 12.4168L19.3087 5.00102L14.5896 18.4843L11.8929 12.4168Z"/>
                            </svg>
                        </div>
                    </a>
                </div>
            </div>

        </>
    )
}

export default Cart;
