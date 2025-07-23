import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const URL = import.meta.env.VITE_Node_Api_Url;

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const fetchCart = async (userId) => {
        try {
            const { data } = await axios.get(`${URL}/cart/${userId}`);
            setCartItems(data.cartitems);
        } catch (error) {
            console.error("Error fetching cart:", error);
        }
    };

    const addToCart = async (item) => {
        try {
            const { data } = await axios.post(`${URL}/cart/`, item);
            fetchCart(item.userId);
        } catch (error) {
            console.error("Error adding to cart:", error);
        }
    };

    const updateCartItem = async (id, updates, userId) => {
        try {
            await axios.put(`${URL}/cart/${id}`, updates);
            fetchCart(userId);
        } catch (error) {
            console.error("Error updating cart item:", error);
        }
    };

    const removeFromCart = async (id, userId) => {
        try {
            await axios.delete(`${URL}/cart/${id}`);
            fetchCart(userId);
        } catch (error) {
            console.error("Error removing cart item:", error);
        }
    };

    return (
        <CartContext.Provider value={{
            cartItems,
            fetchCart,
            addToCart,
            updateCartItem,
            removeFromCart
        }}>
            {children}
        </CartContext.Provider>
    );
};

