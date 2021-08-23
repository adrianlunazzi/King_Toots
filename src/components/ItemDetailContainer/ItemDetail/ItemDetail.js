import { React, useState } from "react";
import ItemCount from "../../ItemCount/ItemCount";
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
  stock,
}) => {
  const [itemCountVisible, setItemCountVisible] = useState(true);
  const [buyButtonsVisible, setBuyButtonsVisible] = useState(true);
  const [count, setCount] = useState(0);

  const onAdd = (count) => {
    setCount(count);
  };

  const onAddToCart = () => {
    setItemCountVisible(false);
    setBuyButtonsVisible(false);
  };

  const onFinishBuy = () => {
    console.log("Compra terminada");
  };
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
                <br />
                {brand} - {model}
              </h3>
              <h2>
                <strong>{price}</strong>
              </h2>
              <h4>
                <i className="fab fa-cc-visa"></i>Hasta 12 cuotas sin interés
              </h4>
              <p>Ver Promociones Bancarias</p>
              <br />
              <br />
              <h5>Stock Disponible: {stock}</h5>
              <div className="counter">
                {itemCountVisible && (
                  <ItemCount productStock={stock} onAdd={onAdd} />
                )}
                {buyButtonsVisible && (
                  <>
                    <button
                      className="buy-button"
                      onClick={onAddToCart}
                      count={count}>
                      Agregar al carrito {count} Unidades
                    </button>
                  </>
                )}
                {!buyButtonsVisible && (
                  <button className="buy-button" onClick={onFinishBuy}>
                    Terminar compra
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
