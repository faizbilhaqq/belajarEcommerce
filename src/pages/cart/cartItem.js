import { useState, useContext } from "react";
import { Shopcontext } from "../../context/shop-context";
import "./cartItem.css"


const CartProduct = (props) => {


    const {productName, productImage, id} = props.data
    const {cartItems, addToCart, removeFromCart, updateCart} = useContext(Shopcontext)


    return (  
        <div className="container">
            
            <div className="cartItem">
                <img  src={productImage}  />
                <div className="productDesc">
                    <h1> {productName} </h1>
                    <p>this is number {id} </p>

                    <input type="text" 
                    value={cartItems[id]}
                    />

                </div>

            </div>
            
        </div>
    );
}
 
export default CartProduct;