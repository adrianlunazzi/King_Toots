import ItemDetail from "./ItemDetail/ItemDetail";
import React, { useState, useEffect } from "react";
import data from "../../data/data";

import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id, Category } = useParams();

  useEffect(() => {
    const productos = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(data);
        }, 2000);
      });
    };
    productos().then((data) => {
      if (id != null) {
        const productDetails = data.filter(
          (productDetail) => productDetail.id == id
        );
        setProducto(productDetails);
        setLoading(false);
      } else {
        setProducto(data);
        setLoading(false);
      }

      const producto = data.find((producto) => producto.id == id);
      setProducto(producto);
      setLoading(false);
    });
  }, [id, Category]);

  return (
    <>
      {loading ? (
        <h6>
          <div className="d-flex align-items-center w-50 my-4">
            <strong className="mx-5 w-50">Cargando Productos...</strong>
            <div
              className="spinner-border ms-auto"
              role="status"
              aria-hidden="true"
            />
          </div>
        </h6>
      ) : (
        <ItemDetail
          key={producto.id}
          id={producto.id}
          product_type={producto.Product_type}
          model={producto.Model}
          brand={producto.Brand}
          price={"Precio $" + producto.Price}
          img_product={producto.Img_product}
          stock={producto.Stock}
          description={producto.description}
        />
      )}
    </>
  );
};
export default ItemDetailContainer;
