// ShopContext.jsx
import { createContext, useEffect, useState } from "react";
import axios from "axios";

const URL = import.meta.env.VITE_Node_Api_Url;

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
    const [newCollections, setNewCollections] = useState([]);

    // Fetch Products From DB
    const fetchProducts = async () => {
        try {
            const res = await axios.get(`${URL}/products`);
            const products = res.data.allProducts;
            setNewCollections(products);
        } catch (error) {
            console.error("Failed to fetch products", error);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const contextValue = {
        newCollections
    };

    return (
        <ShopContext.Provider value={contextValue}>
            {children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
