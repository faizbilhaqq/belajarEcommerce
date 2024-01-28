import { createContext, useEffect, useState } from "react";
import { PRODUCTS } from "../data/products";


export const Shopcontext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let i = 1; i < PRODUCTS.length + 1; i++) {
      cart[i] = 0;
    }
    return cart;
  };

export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart())


    const addToCart = (itemId) =>{
      
      setCartItems( (prev) => ({...prev, [itemId]: prev[itemId]+1})  )
        
        
        
    };

    const removeFromCart = (itemId) =>{
      setCartItems( (prev) => ({...prev, [itemId]: prev[itemId]-1})  )
    };

  const updateCart = (itemId, amount) =>{
    setCartItems( (prev) => ({...prev, [itemId]: amount})  )
  };

  const checkout = () =>{
    setCartItems(getDefaultCart())
  }




    const contextValue = {
      addToCart,
      removeFromCart,
      cartItems,
      updateCart,
      checkout,

    };    

    return (

      <Shopcontext.Provider value={contextValue } >
            {props.children}
      </Shopcontext.Provider> 


    );

}