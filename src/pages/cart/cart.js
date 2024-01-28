import { useState, useContext } from "react";
import { Shopcontext } from "../../context/shop-context";
import CartProduct from './cartItem';
import "./cart.css"
import { PRODUCTS } from "../../data/products";

const Cart = () => {

    const {cartItems, addToCart, removeFromCart, updateCart} = useContext(Shopcontext)

    
    




    return ( 
        
        <div className="container">

            {PRODUCTS.map(product=>
                { if (cartItems[product.id]!==0 ) {
                    return  <CartProduct data={product} />

                
                    
                }
                
                }
                )}



            
        </div>


     );
}
 
export default Cart;