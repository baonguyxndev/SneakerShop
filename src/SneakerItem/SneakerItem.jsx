// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import "./SneakerItemStyle.css";
import { assets } from "../assets/assets";
import { StoreContext } from "../context/StoreContext";

// eslint-disable-next-line react/prop-types
const SneakerItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  return (
    <div className="sneaker-item">
      <div className="sneaker-item-img-container">
        <img className="sneaker-item-image" src={image} alt="" />
        {!cartItems[id] ? (
          <img
            className="add"
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
            alt=""
          />
        ) : (
          <div className="sneaker-item-counter">
            <img
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
              alt=""
            />
            <p>{cartItems[id]}</p>
            <img
              onClick={() => addToCart(id)}
              src={assets.add_icon_green}
              alt=""
            />
          </div>
        )}
      </div>
      <div className="sneaker-item-info">
        <div className="sneaker-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="sneaker-item-desc">{description}</p>
        <p className="sneaker-item-price">${price}</p>
      </div>
    </div>
  );
};

export default SneakerItem;
