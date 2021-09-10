import React, { useState } from "react";
import { addOrder } from "../../firebase/index";

const CartContext = React.createContext();

const CartFunction = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [units, setUnits] = useState(0);
  const [id, setId] = useState("");

  const totalCart2 = cart.map((item) => item.price * item.quantity);
  const totalCart = totalCart2.reduce((acc, red) => acc + red, 0);

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

  const buyer = {
    Nombre: "Usuario",
    Phone: "01144444444",
    Email: "a@b.com.ar",
  };
  const date = new Date().toLocaleString();
  const newOrder = () => {
    const orderToCart = addOrder(cart, totalCart, date, buyer);
    orderToCart.then((data) => {
      setId(data.id);
    });
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        units,
        total,
        addItem,
        deleteAll,
        deleteItem,
        newOrder,
        buyer,
        id,
        setId,
      }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartFunction };
