import { PRODUCTS } from "../../data/products";
import {useState} from "react"
import "./pagination.css"



const Pagination = ({
    totalPosts,
    PostsPerPage,
    setCurrentPage,
    CurrentPage,}) => {

    const pages = [];
    const totalPages = PRODUCTS.length

    for (let i = 1; i <= Math.ceil(totalPages/PostsPerPage); i++) {
        pages.push(i);
        
    }

    return (  
        <div className="pagination">
            {pages.map((page,index) => (
                <button
                    key = {index}
                    onClick = {()=> setCurrentPage(page)}
                    className={page === CurrentPage ? "active" : ""}>
                        {page}
                </button>
            ))}
        </div>
    );
}
 
export default Pagination;