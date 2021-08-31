import React from "react";

const { CartConteiner } = useContext(CartContext);

const { item } = useContext(CartContext);

const CartConteiner = () => {
  return (
    <>
      <ul>
        <li>
          <div className="cart-product-image"> Imagens</div>
          <div>Producto</div>
          <div> Q:{item.count}</div>
          <div>Marca </div>
          <div className="list-price">$ Precio</div>
          <button className="delete-btn-style">
            <i className="fas fa-trash-alt" alt="Eliminar"></i>
          </button>
        </li>
      </ul>
    </>
  );
};

export default CartConteiner;
