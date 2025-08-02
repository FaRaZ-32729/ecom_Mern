import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import UserContext from "./UserContext";

const URL = import.meta.env.VITE_Node_Api_Url;

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
    const { user } = useContext(UserContext)
    const [cartItems, setCartItems] = useState([]);
    console.log("cart item length", cartItems.length)

    const fetchCart = async (userId) => {
        if (!userId) {
            setCartItems([]);
            return;
        }
        try {
            const { data } = await axios.get(`${URL}/cart/${userId}`);
            setCartItems(data.cartitems);
        } catch (error) {
            console.error("Error fetching cart:", error);
        }
    };

    useEffect(() => {
        if (user?._id) {
            fetchCart(user._id);
        } else {
            setCartItems([]);
        }
    }, [user]);

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


    const clearCart = async (userId) => {
        try {
            await axios.delete(`${URL}/cart/clear/${userId}`, {
                withCredentials: true,
            });
            setCartItems([]);
        } catch (error) {
            console.error("Failed to clear cart:", error);
        }
    };


    return (
        <CartContext.Provider value={{
            cartItems,
            fetchCart,
            addToCart,
            updateCartItem,
            removeFromCart,
            clearCart
        }}>
            {children}
        </CartContext.Provider>
    );
};

