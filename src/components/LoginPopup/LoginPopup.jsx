// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "./LoginPopupStyle.css";
import { assets } from "../../assets/assets";

// eslint-disable-next-line react/prop-types
const LoginPopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Đăng nhập");

  return (
    <div className="login-popup">
      <from className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="login-popup-inputs">
          {currState === "Đăng nhập" ? (
            <></>
          ) : (
            <input type="text" placeholder="Tên" required />
          )}
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Mât khẩu" required />
        </div>
        <button>
          {currState === "Đăng kí" ? "Tạo tài khoản" : "Đăng nhập"}
        </button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>Tôi đồng ý với các điều khoản sử dụng và chính sách bảo mật </p>
        </div>
        {currState === "Đăng nhập" ? (
          <p>
            Bạn chưa có tài khoản?{" "}
            <span onClick={() => setCurrState("Đăng kí")}>Đăng kí ngay</span>
          </p>
        ) : (
          <p>
            Bạn đã có tài khoản?{" "}
            <span onClick={() => setCurrState("Đăng nhập")}>
              Đăng nhập ngay
            </span>{" "}
          </p>
        )}
      </from>
    </div>
  );
};

export default LoginPopup;
