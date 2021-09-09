import ItemDetail from "./ItemDetail/ItemDetail";
import React, { useState, useEffect } from "react";
import { productDetail } from "../../firebase/index";

import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id, Category } = useParams();

  useEffect(() => {
    const item = productDetail(id);
    item.then((data) => {
      setProducto(data.data());
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
          id={id}
          product_type={producto.Product_type}
          model={producto.Model}
          brand={producto.Brand}
          price={producto.Price}
          img_product={producto.Img_product}
          stock={producto.Stock}
          description={producto.description}
          category={producto.Category}
          key={producto.id}
        />
      )}
    </>
  );
};
export default ItemDetailContainer;
