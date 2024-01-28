import {PRODUCTS} from "../../data/products";
import { useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { Shopcontext } from "../../context/shop-context";

import "./productDetails.css"

const Details = () => {

    const {id} = useParams()
    const {cartItems, addToCart, removeFromCart,} = useContext(Shopcontext)


    const product = PRODUCTS.find(p => p.id == Number(id)  )

    const {productImage, productName} = product


    return ( 
        <div className="contentDetails">
            <p>product details</p>
            <p>this is id of  {id} </p>
            <p>This is {productName} </p>

            <button onClick={()=>{addToCart(id)}} >+</button>
            <p>Your Cart:  {cartItems[id]} </p>
            <button onClick={()=>{removeFromCart(id)}} >-</button>


            
        </div>
     );
}
 
export default Details;