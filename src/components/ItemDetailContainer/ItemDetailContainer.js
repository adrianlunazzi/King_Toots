import ItemDetail from "./ItemDetail/ItemDetail";
import React, { useState, useEffect } from "react";
import { getFirestore } from "../../firebase/index";

import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id, Category } = useParams();

  useEffect(() => {
    setLoading(true);
    const db = getFirestore();
    const itemCollection = db.collections("data");
    itemCollection
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.size === 0) {
          console.log("No results");
        }
        setProducto(querySnapshot.docs.map((doc) => doc.data()));
      })
      .catch((error) => {
        console.log("Error searching items", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

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
          price={producto.Price}
          img_product={producto.Img_product}
          stock={producto.Stock}
          description={producto.description}
        />
      )}
    </>
  );
};
export default ItemDetailContainer;
