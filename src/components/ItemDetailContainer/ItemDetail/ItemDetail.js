import React from "react";
import ItemCount from "../../ItemCount/ItemCount";
import { Link } from "react-router-dom";

import "./itemdetail.css";
const ItemDetail = ({ img_product, product_type, brand, price, stock, id }) => {
  return (
    <>
      <Link to={`${id}`}>
        <div className="product-Container">
          <div className="details-container">
            <div className="product-image">{img_product}</div>
            <div className="product-description">
              <h3>
                {id}
                {product_type}
                {brand}
              </h3>
              <h2>
                <strong>{price}</strong>
              </h2>
              <h4>
                <i className="fab fa-cc-visa"></i>Hasta 12 cuotas sin interés
              </h4>
              <p>Ver Promociones Bancarias</p>
            </div>
            <ItemCount stock={stock} />
          </div>
        </div>
      </Link>
    </>
  );
};

export default ItemDetail;
