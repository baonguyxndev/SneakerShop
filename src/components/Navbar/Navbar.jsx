// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from "react";
import "./NavbarStyle.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";

// eslint-disable-next-line react/prop-types
const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");

  const { getTotalItemCount } = useContext(StoreContext);

  return (
    <div className="navbar">
      <img src={assets.logo} alt="Logo BAOABO" className="logo" />
      <ul className="navbar-menu">
        <Link
          to="/"
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          Trang chủ
        </Link>
        <a
          href="#explore-menu"
          onClick={() => setMenu("menu")}
          className={menu === "menu" ? "active" : ""}
        >
          Sản phẩm
        </a>
        <a
          href="#app-download"
          onClick={() => setMenu("mobile-app")}
          className={menu === "mobile-app" ? "active" : ""}
        >
          Dịch vụ
        </a>
        <a
          href="#footer"
          onClick={() => setMenu("contact-us")}
          className={menu === "contact-us" ? "active" : ""}
        >
          Về chúng tôi
        </a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="Search Icon" />
        <div className="navbar-search-icon">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="Cart Icon" />
            {getTotalItemCount() > 0 && (
              <div className="cart-amount">{getTotalItemCount()}</div>
            )}
          </Link>
        </div>
        <button onClick={() => setShowLogin(true)}>Đăng nhập</button>
      </div>
    </div>
  );
};

export default Navbar;
