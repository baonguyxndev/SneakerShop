// eslint-disable-next-line no-unused-vars
import React, { useContext, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import "./NavbarStyle.css";
import { assets } from "../../assets/assets";

// eslint-disable-next-line react/prop-types
const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const location = useLocation(); // Lấy thông tin đường dẫn hiện tại

  const { getTotalItemCount } = useContext(StoreContext);

  // Cập nhật trạng thái menu dựa trên đường dẫn và hash hiện tại
  useEffect(() => {
    if (location.pathname === "/") {
      setMenu("home");
    } else if (location.pathname === "/products") {
      setMenu("products");
    } else if (location.hash === "/service") {
      setMenu("service");
    } else if (location.hash === "/about-us") {
      setMenu("about-us");
    } else {
      setMenu(""); // Đặt giá trị trống nếu không khớp với bất kỳ menu nào
    }
  }, [location.pathname, location.hash]); // Lắng nghe cả pathname và hash

  return (
    <div className="navbar">
      <Link to="/" className="logo-link">
        <img src={assets.logo} alt="Logo BAOABO" className="logo" />
      </Link>
      <ul className="navbar-menu">
        <Link
          to="/"
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          Trang chủ
        </Link>
        <Link
          to="/products"
          onClick={() => setMenu("products")}
          className={menu === "products" ? "active" : ""}
        >
          Sản phẩm
        </Link>
        <a
          href="/service"
          onClick={() => setMenu("service")}
          className={menu === "service" ? "active" : ""}
        >
          Dịch vụ
        </a>
        <a
          href="/about-us"
          onClick={() => setMenu("about-us")}
          className={menu === "about-us" ? "active" : ""}
        >
          Về chúng tôi
        </a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="Search Icon" />
        <div className="navbar-search-icon">
          <Link to="/cart">
            <img src={assets.cart_icon} alt="Cart Icon" className="cart-icon" />
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
