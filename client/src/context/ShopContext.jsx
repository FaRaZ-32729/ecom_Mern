import { createContext, useState } from "react";
import { allProducts } from "../Data/AllProducts"
import { newCollections } from "../Data/NewCollections"

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < newCollections.length + 1; index++) {
        cart[index] = 0;
    }
    return cart;
}


const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());

    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
    }
    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    }
    const getTotalAmount = () => {
        let totalAmount = 0;
        for (let item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = newCollections.find((product) => product.id === Number(item))
                totalAmount += cartItems[item] * itemInfo.new_price;
            }
        }
        return totalAmount;
    }
    const getTotalItems = () => {
        let totalItems = 0;
        for (let item in cartItems) {
            if (cartItems[item] > 0) {
                totalItems += cartItems[item];
            }
        }
        return totalItems;
    }

    const contextValue = { allProducts, newCollections, cartItems, addToCart, removeFromCart, getTotalAmount, getTotalItems }
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )

}

export default ShopContextProvider;