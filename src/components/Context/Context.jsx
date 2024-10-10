import { createContext, useState } from "react";
import all_products from '../Assets/all_product'
import Items from "../Item/Items";
import Product from "../../pages/Product";
export const ShopContext = createContext(null)

const getDefaultCart = () => {
    let cart = {}
    for(let i = 0; i<all_products.length; i++){
        cart[i] = 0
    }
    return cart
}
const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart())

    // console.log(cartItems);
    const addtoCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]:prev[itemId]+1}));
        // console.log(cartItems);
        
    }
    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]:prev[itemId]-1}))
    }
    const getTotalCartAmount =()=> {
        let totalAmount = 0;
        for(let item in cartItems){
            if(cartItems[item]>0){
               let itemInfo =  all_products.find((product)=>product.id===Number(item))
               totalAmount += itemInfo.new_price*cartItems[item]
            }
        }return totalAmount
    }
    const getTotalItem = () => {
        let totalItem = 0
        for(let item in cartItems){
            if(cartItems[item]>0){
             totalItem += cartItems[item]
            }
        }
        return totalItem
    }
    const contextValue = {getTotalCartAmount, getTotalItem, all_products, cartItems, addtoCart, removeFromCart}

    return <ShopContext.Provider value={contextValue}>
        {props.children}
    </ShopContext.Provider>
}
export default ShopContextProvider