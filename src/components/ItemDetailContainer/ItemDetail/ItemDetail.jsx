import { React, useState, useContext } from "react";
import ItemCount from "../../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import "./itemdetail.css";
import { CartContext } from "../../contexts/CartContext";

const ItemDetail = ({
  img_product,
  product_type,
  model,
  description,
  brand,
  price,
  id,
  category,
  stock,
}) => {
  const [itemCountVisible, setItemCountVisible] = useState(true);
  const [buyButtonsVisible, setBuyButtonsVisible] = useState(true);
  const [count, setCount] = useState(0);

  const { addItem } = useContext(CartContext);

  const onAdd = (count) => {
    setCount(count);
  };

  const onAddToCart = (props) => {
    setItemCountVisible(false);
    setBuyButtonsVisible(false);
    addItem({
      id,
      img_product,
      product_type,
      model,
      brand,
      price,
      category,
      stock,
      count,
    });
  };

  const onFinishBuy = () => {};
  return (
    <>
      <div className="detail-container-list">
        <Link to={`/${category}/${id}`}></Link>
        <div className="product-Container">
          <div className="details-container">
            <img src={img_product} alt="" className="product-image" />
            <div className="product-description">
              <h3>
                {product_type}
                <br />
                {brand} - {model}
              </h3>
              <h2>
                <strong>Precio ${price}</strong>
              </h2>
              <h4>
                <i className="fab fa-cc-visa"></i>Hasta 12 cuotas sin interés
              </h4>
              <p>Ver Promociones Bancarias</p>
              <br />
              <p>
                <strong>Descripcion:</strong> {description}
              </p>
              <h5>Stock Disponible: {stock}</h5>
              <div className="counter">
                {itemCountVisible && <ItemCount stock={stock} onAdd={onAdd} />}
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
                  <Link to="/Cart">
                    <button className="buy-button" onClick={onFinishBuy}>
                      Terminar compra
                    </button>
                  </Link>
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
