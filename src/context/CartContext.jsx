import { createContext, useContext, useState } from "react";

export const CartContext = createContext({
    cart: [],
    addItem: () => { },
    isInCart: () => { }
})

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    console.log(cart);
    const addItem = (ProductToAdd) => {
        if (!isInCart(ProductToAdd.id)) {
            setCart(prev => [...prev, ProductToAdd])
        } else {
            console.error('el producto ya esta agregado')
        }
    }

    const isInCart = (productId) => {
        return cart.some(prod => prod.id === productId)
    }

    const getItem = (productId) => {

    }

    const removeItem = (productId) => {
        const cartUpdated = cart.filter(prod => prod.id !== productId)
        setCart(cartUpdated)
    }

    const clearCart = () => {
        setCart([])
    }

    const getTotalQuantity = () => {
        let accu = 0

        cart.forEach(prod => {
            accu += prod.quantity
        })

        return accu
    }

    const totalQuantity = getTotalQuantity()

    const getTotal = () => {
        let accu = 0

        cart.forEach(prod => {
            accu += prod.quantity * prod.price
        })

        return accu
    }

    const total = getTotal()

    return (
        <CartContext.Provider value={{ cart, isInCart, addItem, getItem, removeItem, totalQuantity, total, clearCart }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    return useContext(CartContext)
}