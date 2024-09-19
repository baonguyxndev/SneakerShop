// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart/Cart";
import Home from "./pages/Home/Home";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Footer from "./components/Footer/Footer";
import LoginPopup from "./components/LoginPopup/LoginPopup";
import Products from "./pages/Products/Products";
import Category from "./pages/Category/Category";
import Service from "./pages/Service/Service";
import AboutUs from "./pages/AboutUs/AboutUs";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
      <div className="app">
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/order" element={<PlaceOrder/>} />
          <Route path="/products" element={<Products/>}/>
          <Route path="/category/:category" element={<Category/>}/>
          <Route path="/service" element={<Service/>}/>
          <Route path="/about-us" element={<AboutUs/>}/>
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
