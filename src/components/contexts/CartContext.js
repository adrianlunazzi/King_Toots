import React, { useState } from "react";

const CartContext = React.createContext();

const CartFunction = ({ children }) => {
  const [cart, setCart] = useState([]);

  const removeAll = () => {
    setCart([]);
  };
  const isInCart = (id) => {
    const itemInCart = cart.find((item) => item.id == id);
    return itemInCart;
  };

  const addItem = (
    img_product,
    product_type,
    model,
    brand,
    price,
    id,
    category,
    stock,
    count
  ) => {
    setCart([
      ...cart,
      {
        img_product,
        product_type,
        model,
        brand,
        price,
        id,
        category,
        stock,
        count,
      },
    ]);
  };
  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        removeAll,
        addItem,
        isInCart,
      }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartFunction };
