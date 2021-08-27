import React, { useState } from "react";

const CartContext = React.createContext();

const CartFunction = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState([]);

  /*
   const removeItem = () => {};
  const removeAll = () => {
    setCart = [];
  };
  const isInCart = () => {};*/

  return (
    <CartContext.Provider value={[cart, setCart, quantity, setQuantity]}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartFunction };
