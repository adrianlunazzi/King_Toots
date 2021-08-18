import React from "react";
import { Link } from "react-router-dom";
import "./itemdetail.css";

const ItemDetail = ({
  img_product,
  product_type,
  model,
  brand,
  price,
  id,
  category,
  description,
}) => {
  return (
    <>
      <div className="detail-container-list">
        <Link to={`/${category}/${id}`}></Link>
        <div className="product-Container">
          <div className="details-container">
            <div className="product-image">{img_product}</div>
            <div className="product-description">
              <h3>
                {product_type}
                {brand}
                <br />
                {model}
              </h3>
              <h2>
                <strong>{price}</strong>
              </h2>
              <h4>
                <i className="fab fa-cc-visa"></i>Hasta 12 cuotas sin interés
              </h4>
              <p>Ver Promociones Bancarias</p>
              <br />
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
