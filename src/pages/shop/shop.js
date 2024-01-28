import {PRODUCTS} from "../../data/products";
import Pagination from "../pagination/pagination";
import List from "../productList/productList"
import "./shop.css"
import { useContext, useState } from "react";
import Nav from 'react-bootstrap/Nav';
import { Shopcontext } from "../../context/shop-context";
import { Link, useParams } from "react-router-dom";



const Shop = () => {

    const [CurrentPage, setCurrentPage] = useState(1);
    const [PostsPerPage, setPostsPerPage] = useState(4);


    const lastPostIndex = CurrentPage * PostsPerPage;
    const firstPostIndex = lastPostIndex - PostsPerPage;
    const currentPosts = PRODUCTS.slice(firstPostIndex, lastPostIndex);

    const {cartItems, addToCart} = useContext(Shopcontext)

  


    

    

   


    return ( 
        <div className="shop">

            
            <h1>This is our Ecommerce</h1>

            <div className="product">


                
                {currentPosts.map(
                    productss => (
                        <List data={productss} />
                    )
                )}

                <Pagination
                 
                 PostsPerPage={PostsPerPage}
                 setCurrentPage={setCurrentPage}
                 CurrentPage={CurrentPage}
                />


            </div>
        </div>
        

     );
}
 
export default Shop;