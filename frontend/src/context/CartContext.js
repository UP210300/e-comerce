// CartContext.js

import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [selectedItems, setSelectedItems] = useState([]);

    const addToCart = (product) => {
        const productId = product.id;
        setCart((prevCart) => {
            const existingProduct = prevCart.find(item => item.id === productId);

            if (existingProduct) {
                return prevCart.map((item) =>
                    item.id === productId
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                setSelectedItems((prevSelected) => [...prevSelected, productId]);
                return [...prevCart, { ...product, quantity: 1 }];
            }
        });
    };

    const removeFromCart = (productId) => {
        setCart((prevCart) => {
            const updatedCart = prevCart.filter((item) => item.id !== productId);
            setSelectedItems((prevSelected) => prevSelected.filter((id) => id !== productId));
            return updatedCart;
        });
    };

    const updateCartQuantity = (productId, quantity) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === productId ? { ...item, quantity: quantity } : item
            )
        );
    };

    const toggleItemSelection = (productId) => {
        setSelectedItems((prev) =>
            prev.includes(productId)
                ? prev.filter(id => id !== productId)
                : [...prev, productId]
        );
    };

    const clearCart = () => {
        setCart([]);
        setSelectedItems([]);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateCartQuantity, selectedItems, toggleItemSelection, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};