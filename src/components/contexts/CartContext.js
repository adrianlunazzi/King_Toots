import React, { useState } from "react";

const CartContext = React.createContext();

const CartFunction = ({ children }) => {
  const [order, setOrder] = useState([]);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [units, setUnits] = useState(0);

  const addItem = (product) => {
    const isInCart = cart.find((item) => item.id == product.id);

    if (!isInCart) {
      setCart([
        ...cart,
        {
          id: product.id,
          type: product.product_type,
          price: product.price,
          brand: product.brand,
          img: product.img_product,
          model: product.model,
          quantity: product.count,
          subtotal: product.price * product.count,
          total: product.count * product.price,
        },
      ]);
      setUnits(units + 1);
      setTotal(product.price);
    } else {
      const newCart = cart.map((item) => {
        if (item.id == product.id) {
          item.quantity += product.count;
        }
        return item;
      });
      setCart(newCart);
    }
  };
  const deleteAll = () => {
    setCart([]);
  };
  const deleteItem = (id) => {
    const remove = cart.filter((item) => item.id !== id);
    setCart(remove);
  };

  const orderId = (id) => {
    setOrder(orderId);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        units,
        total,
        order,
        addItem,
        deleteAll,
        deleteItem,
        orderId,
      }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartFunction };
