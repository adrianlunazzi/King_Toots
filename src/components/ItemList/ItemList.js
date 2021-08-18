import data from "../../data/data";
import Item from "./Item/Item";
import "./itemlist.css";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ItemList = () => {
  const { Category } = useParams();
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const productos = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(data);
        }, 2000);
      });
    };

    productos().then((items) => {
      if (Category != null) {
        const productCategories = items.filter(
          (producto) => producto.Category === Category
        );
        setProductos(productCategories);
        setLoading(false);
      } else {
        setProductos(items);
        setLoading(false);
      }
    });
  }, [Category]);

  return (
    <div className="item-list-conteiner">
      {loading ? (
        <h2>
          <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          Loading Products...
        </h2>
      ) : (
        productos.map((producto) => (
          <Item
            key={producto.id}
            product_type={producto.Product_type}
            brand={producto.Brand}
            model={producto.Model}
            price={"Precio $" + producto.Price}
            img_product={producto.Img_product}
            stock={producto.Stock}
            category={producto.Category}
            id={producto.id}
          />
        ))
      )}
    </div>
  );
};
export default ItemList;
