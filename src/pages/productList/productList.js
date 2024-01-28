import { Shopcontext } from "../../context/shop-context";
import { Link, useParams } from "react-router-dom";
import { useContext, useState } from "react";
import './productList.css';

const List = (props) => {

    const {cartItems, addToCart} = useContext(Shopcontext)
    const {id, productImage, productName} = props.data



    return ( 
    <div className="product-preview" key={id} >
        <Link to={`/details/${id}`}> 
        <img src={productImage} />
        <p>{id}</p>
        <p>{productName}</p>
        
        </Link>
        <button  onClick={()=> addToCart(id)}  >
            add to cart {  cartItems[id] > 0 && <div> ({cartItems[id]}) </div>  }
        </button>
    </div>
     );
}
 
export default List;