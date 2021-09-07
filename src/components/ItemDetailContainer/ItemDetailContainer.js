import ItemDetail from "./ItemDetail/ItemDetail";
import React, { useState, useEffect } from "react";
import data from "../../data/data";

import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [products, setProducts] = useState([]);
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
    products().then((data) => {
      if (id != null) {
        const productDetails = data.filter(
          (productDetail) => productDetail.id == id
        );
        setProducts(productDetails);
        setLoading(false);
      } else {
        setProducts(data);
        setLoading(false);
      }

      const producto = data.find((producto) => producto.id == id);
      setProducts(products);
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
          key={products.id}
          id={products.id}
          product_type={products.Product_type}
          model={products.Model}
          brand={products.Brand}
          price={products.Price}
          img_product={products.Img_product}
          stock={products.Stock}
          description={products.description}
        />
      )}
    </>
  );
};
export default ItemDetailContainer;
