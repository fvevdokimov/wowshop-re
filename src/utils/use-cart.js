import {useCallback, useEffect} from "react";
import {isSSR, useLocalStorage} from "./use-local-storage";

// TODO: Add React context shared state
export function useCart() {
    const [cartItems, setCartItems] = useLocalStorage('cart')
    const addToCart = useCallback((id, sizeId) => {
        const newItems = {...cartItems};
        newItems[id] = {...(cartItems[id] || {
            count: 0,
            sizeId
        })};
        newItems[id].count++;
        setCartItems(newItems)
    }, [cartItems, setCartItems])

    const removeFromCart = useCallback((id) => {
       
        const newItems = {...cartItems}
        
        delete newItems[id];
        setCartItems(newItems)
    }, [cartItems, setCartItems])

    const changeCartItem = useCallback(({id, count, sizeId}) => {
        const newItems = {...cartItems}
        if(id === undefined || !newItems[id]) {
            throw new Error('You need to provide a valid ID to change the cart item')
        }
        if (count === undefined || count > 0) {
            newItems[id] = {
                count: count || newItems[id].count,
                sizeId: sizeId || newItems[id].sizeId
            };
        } else {
            delete newItems[id];
        }
        setCartItems(newItems)
    }, [cartItems, setCartItems])

    const clearCart = useCallback(() => {
        setCartItems({})
    }, [setCartItems])

    useEffect(() => {
        if(!isSSR) {
            window.addToCart = addToCart;
            return () => {
                delete window.addToCart;
            }
        }
    }, [addToCart])

    return {
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        changeCartItem
    }
}
