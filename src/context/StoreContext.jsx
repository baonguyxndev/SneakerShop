/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from 'react';
import { sneaker_list } from '../assets/assets';

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

  const [cartItems, setCartItems] = useState({});

  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1
    }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] - 1
    }));
  };

  useEffect(()=>{
    console.log(cartItems);
},[cartItems])

  const contextValue = {
    sneaker_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
