import ItemDetail from "./ItemDetail/ItemDetail";
import React, { useState, useEffect } from "react";
import data from "../../data/data";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const productos = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(data);
        }, 2000);
      });
    };
    productos().then((data) => {
      const producto = data.find((producto) => producto.id === id);
      setProducto(producto);
      setLoading(false);
    });
  }, [id]);

  return (
    <>
      {loading ? (
        <h2>
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          CARGANDO PRODUCTO...
        </h2>
      ) : (
        <ItemDetail
          id={producto.id}
          product_type={producto.Product_type}
          model={producto.Model}
          price={"Precio $" + producto.Price}
          img_product={producto.Img_product}
          stock={producto.Stock}
        />
      )}
    </>
  );
};
export default ItemDetailContainer;
