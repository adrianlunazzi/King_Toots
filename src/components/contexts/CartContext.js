import React, { useState } from "react";


const CartContext = React.createContext();

const CartFunction = ({ children }) => {
  const [cart, setCart] = useState([]);


  const removeAll = () => {
    setCart([]);
  };

 
 
  const addToCart = () => {
    setCart([...cart, { 
      img_product,
      product_type,
      model,
      brand,
      price,
      id,
      category,
      stock,
    }]
   };

   /*const isInCart =()=>{
     const productInCart = cart.find(elemnt => element.id === id);
     if (productInCart ){
       count + 1
     }else{
       addToCart
     }
     }

   }
  
   /*const remove = () => {
    const removeId = cart.find(elemnt => element === id);
  };*/

  return (
    <CartContext.Provider
      value={[cart, setCart, removeAll, addToCart]}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartFunction };
