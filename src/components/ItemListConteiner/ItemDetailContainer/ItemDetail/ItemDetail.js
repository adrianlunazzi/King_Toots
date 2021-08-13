import React from "react";

import "./itemdetail.css";
const ItemDetail = (props) => {
  return (
    <>
      <div className="product-Container">
        <div className="details-container">
          <div className="product-image">{props.img_product}</div>
          <div className="product-description">
            <h3>
              {props.product_type}
              {props.brand}
            </h3>
            <h2>{props.price}</h2>

            <h4>
              <i className="far fa-credit-card"></i>Hasta 12 cuotas sin interés
            </h4>
            <p>Ver Promociones Bancarias</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
