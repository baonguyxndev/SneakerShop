/* eslint-disable no-unused-vars */

import React, { useContext } from "react";
import "./CartStyle.css";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";
import { assets } from "../../assets/assets";

const Cart = () => {
  const { cartItems, sneaker_list, removeFromCart, getTotalCartAmount } =
    useContext(StoreContext);
  const navigate = useNavigate();

  // Kiểm tra nếu giỏ hàng trống bằng cách xem có sản phẩm nào trong cartItems không
  const isCartEmpty = Object.keys(cartItems).every(
    (key) => cartItems[key] === 0
  );

  return (
    <div className="cart">
      {isCartEmpty ? (
        <div className="cart-empty">
          <img src={assets.cart_empty_icon} alt="Cart is empty" />
          <h2>Giỏ hàng trống</h2>
          <button onClick={() => navigate("/")}>Tiếp tục mua sắm</button>
        </div>
      ) : (
        <>
          <div className="cart-items">
            <div className="cart-items-title">
              <p>Items</p>
              <p>Title</p>
              <p>Price</p>
              <p>Quantity</p>
              <p>Total</p>
              <p>Remove</p>
            </div>
            <br />
            <hr />
            {sneaker_list.map((item, index) => {
              if (cartItems[item._id] > 0) {
                return (
                  <div key={item._id}>
                    <div className="cart-items-title cart-items-item">
                      <img src={item.image} alt="" />
                      <p>{item.name}</p>
                      <p>{item.price}₫</p>
                      <p>{cartItems[item._id]}</p>
                      <p>{item.price * cartItems[item._id]}₫</p>
                      <p
                        onClick={() => removeFromCart(item._id)}
                        className="cross"
                      >
                        x
                      </p>
                    </div>
                    <hr />
                  </div>
                );
              }
            })}
          </div>
          <div className="cart-bottom">
            <div className="cart-total">
              <h2>Tổng đơn hàng</h2>
              <div>
                <div className="cart-total-details">
                  <p>Giá</p>
                  <p>{getTotalCartAmount()}₫</p>
                </div>
                <hr />
                <div className="cart-total-details">
                  <p>Phí giao hàng</p>
                  <p>{50000}₫</p>
                </div>
                <hr />
                <div className="cart-total-details">
                  <b>Tổng</b>
                  <b>{getTotalCartAmount() + 50000}₫</b>
                </div>
              </div>
              <button onClick={() => navigate("/order")}>
                Tiếp tục thanh toán
              </button>
            </div>
            <div className="cart-promocode">
              <div>
                <p>Nếu bạn có mã khuyến mãi, hãy nhập ở đây</p>
                <div className="cart-promocode-input">
                  <input type="text" placeholder="Mã khuyến mãi" />
                  <button>Sử dụng</button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
