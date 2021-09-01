import React, { useState } from "react";

const CartContext = React.createContext();

const CartFunction = ({ children }) => {
  const [cart, setCart] = useState([]);

  const removeAll = () => {
    setCart([]);
  };

  const removeItem = (id) => {
    const remove = cart.filter((item) => item.id != id);
    setCart(remove);
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
    if (isInCart(id)) {
      console.log("estoy en el carrito");
    } else {
      console.log("no estoy en el carrito");
    }
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
        removeItem,
      }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartFunction };
