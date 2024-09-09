// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import "./PlaceOrderStyle.css";
import { StoreContext } from "../../context/StoreContext";

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);

  return (
    <form className="place-order">
      <div className="place-order-left">
        <p className="title">Thông tin giao hàng</p>
        <div className="multi-fields">
          <input type="text" placeholder="Họ" />
          <input type="text" placeholder="Tên" />
        </div>
        <input type="email" placeholder="Địa chỉ email" />
        <input type="text" placeholder="Địa chỉ" />
        <div className="multi-fields">
          <input type="text" placeholder="Tỉnh/Thành phố" />
          <input type="text" placeholder="Quận/Huyện" />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder="Đường" />
          <input type="text" placeholder="Số nhà" />
        </div>
        <input type="text" placeholder="Số điện thoại" />
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Giá</p>
              <p>{getTotalCartAmount()}₫</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Phí giao hàng</p>
              <p>{2}₫</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Tổng</b>
              <b>{getTotalCartAmount() + 2}₫</b>
            </div>
          </div>
          <button>Tiếp tục</button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
