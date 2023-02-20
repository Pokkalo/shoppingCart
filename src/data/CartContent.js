import { createContext, ReactNode, useContext, useState } from "react"
import { productInput } from "./DummyData"

const ShoppingCartContext = createContext({})


export function useShoppingCart(){
    return useContext(ShoppingCartContext)
}
export function ShoppingCartProvider({children}){
    const [isOpen, setIsOpen] = useState(false)

    const [cartItems, setCartItems] = useState([])

    const openCart = () => setIsOpen(true)
    const closeCart = () => setIsOpen(false)



    function getItemQuantity(id){
        return cartItems.find(item => item.id === id)?.quantity || 0
    }

    function increaseCartQuantity(id){
        setCartItems(currItems => {
            if(currItems.find(item => item.id === id) == null){
                return [...currItems, {id, quantity: 1}]
            } else{
                return currItems.map(item => {
                    if(item.id === id){
                        return {...item, quantity: item.quantity + 1}
                    }else{
                        return item
                    }
                })
            }
        })
    }

    function decreaseCartQuantity(id){
        setCartItems(currItems => {
            if(currItems.find(item => item.id === id)?.quantity === 1){
                return currItems.filter(item => item.id !== id)
            } else{
                return currItems.map(item => {
                    if(item.id === id){
                        return {...item, quantity: item.quantity - 1}
                    }else{
                        return item
                    }
                })
            }
        })
    }
    function removeFromCart(id){
        setCartItems(currItems => {
            return currItems.filter(item => item.id !== id)
        })
    }

    const cartQuantity = cartItems.reduce(
        (quantity, item) => item.quantity + quantity, 0
    )
    return (
        <ShoppingCartContext.Provider 
        value={{ getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart, 
        openCart, closeCart,
        cartItems, cartQuantity}}>
            {children}
        </ShoppingCartContext.Provider>
    )
}