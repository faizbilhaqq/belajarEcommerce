import './App.css';
import Shop from './pages/shop/shop';
import Cart from './pages/cart/cart';
import Details from './pages/productDetails/productDetails';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/navbar/navbar";
import { ShopContextProvider } from './context/shop-context';


function App() {
  return (

    <ShopContextProvider>
    <Router>
    <div className="App">
      <div className="content">
      <Navbar/>
      <Routes>


      <Route path="/" element={<Shop />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/details/:id" element={<Details />} />

      
      </Routes>
      </div>
    </div>
    </Router>
    </ShopContextProvider>
  );
}

export default App;
