import React from "react";
import "./item.css";

const Item = (props) => {
  return (
    <>
      <div className="card">
        <div className="product-image">{props.img_product}</div>
        <div className="card-body">
          <ul className="list-group list-group-flush">
            <h4 className="card-title">{props.product_type}</h4>
            <li className="list-group-item">
              <strong>{props.brand}</strong>
            </li>
            <li className="list-group-item">{props.model}</li>
            <li className="list-group-item-price">
              <strong>{props.price}</strong>
            </li>
          </ul>
          <button type="button" className="btn-more">
            Mas Info
          </button>
        </div>
      </div>
    </>
  );
};

export default Item;
