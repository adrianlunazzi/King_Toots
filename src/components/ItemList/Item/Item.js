import React from "react";
import { Link } from "react-router-dom";
import "./item.css";

const Item = ({
  img_product,
  product_type,
  brand,
  model,
  price,
  id,
  category,
}) => {
  return (
    <>
      <div className="card">
        <Link to={`/${category}/${id}`}>
          <img src={img_product} className="card-image" alt="" />
          <div className="card-body">
            <ul className="list-group list-group-flush">
              <h4 className="card-title">{product_type}</h4>
              <li className="list-group-item">
                <strong>{brand}</strong>
              </li>
              <li className="list-group-item">{model}</li>
              <li className="list-group-item-price">
                <strong>${price}</strong>
              </li>
              <li className="list-group-item-price"></li>
            </ul>
            <button type="button" className="btn-more">
              Mas Info
            </button>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Item;
