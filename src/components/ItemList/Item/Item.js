import React from "react";
import ItemCount from "../../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import "./item.css";

const Item = ({
  img_product,
  product_type,
  brand,
  model,
  price,
  stock,
  id,
  category,
}) => {
  return (
    <>
      <Link to={`/${category}/${id}`}>
        <div className="card">
          <div className="card-image">{img_product}</div>
          <div className="card-body">
            <ul className="list-group list-group-flush">
              <h4 className="card-title">{product_type}</h4>
              <li className="list-group-item">
                <strong>{brand}</strong>
              </li>
              <li className="list-group-item">{model}</li>
              <li className="list-group-item-price">
                <strong>{price}</strong>
              </li>
              <li className="list-group-item-price"></li>
            </ul>
            <button type="button" className="btn-more">
              Mas Info
            </button>
          </div>
          <div className="counter">
            <ItemCount productStock={stock} />
          </div>
        </div>
      </Link>
    </>
  );
};

export default Item;
