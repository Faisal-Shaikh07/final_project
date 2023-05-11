import React from "react";
import './App.css';
import Home from './component/Home';
import Navbar from './component/Navbar';
import { Route, Routes } from 'react-router-dom';
import Products from './component/Products';
import ProductDetails from './component/ProductDetails';
import About from './component/About';
import Contact from './component/Contact';
import Cart from './component/Cart';
import Checkout from './component/Checkout';


function App() {

  return (
    <div className="App">

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/productdetails/:id" element={<ProductDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>

    </div>
  );
}

export default App;
