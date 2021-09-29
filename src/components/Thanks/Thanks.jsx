import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { CartContext } from "../contexts/CartContext";

const Thanks = () => {
  const { id } = useContext(CartContext);
  return (
    <div className="thanks-container2">
      <h2>Muchas gracias por tu Compra!!</h2>
      <br />
      <h5>
        El numero de pedido es el: <strong>{id}</strong>
        <br />
        <br />
        Estaras recibiendo un mail con tu orden y los datos para coordinar la
        entrega.
      </h5>

      <Link to="/">
        <button className="btn-return-shop">Volver a la tienda</button>
      </Link>
    </div>
  );
};

export default Thanks;
