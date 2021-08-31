import React, { useState } from "react";

const CartContext = React.createContext();

const CartFunction = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [itemCountVisible, setItemCountVisible] = useState(true);
  const [buyButtonsVisible, setBuyButtonsVisible] = useState(true);

  const deleteAll = () => {
    setCart([]);
  };
  const addToCart = () => {
    setItemCountVisible(false);
    setBuyButtonsVisible(false);
    alert("clic to addToCart");
  };

  const removeItem = () => {};
  const isInCart = () => {};
  /*
   const items = cart.map((item) => (
    <>
      {item.id}
      {item.product_type}
      {item.count}
      {item.brand}
      {item.price}
    </>
      ));
const removeItem = () => {};
const itemsTotal = items.reduce((acc, curr) => acc + curr.count, 0);
const totalPrice = items.reduce((acc, curr) => acc + curr.price, 0);
const isInCart = () => {};*/

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        deleteAll,
        addToCart,
        setBuyButtonsVisible,
        buyButtonsVisible,
        itemCountVisible,
        removeItem,
        isInCart,
      }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartFunction };
