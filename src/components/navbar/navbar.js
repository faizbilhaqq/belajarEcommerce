import "./navbar.css";
import { Link, useParams } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="nav">

            <Link to="/" >Shop</Link>
            <Link to="/cart" >Cart</Link>


        </div>

     



     );
}
 
export default Navbar;