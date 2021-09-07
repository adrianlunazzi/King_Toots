import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { allItems } from "../../firebase/index";
import Item from "./Item/Item";
import "./itemlist.css";

const ItemList = () => {
  const { Category } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (Category != null) {
    } else {
      const items = allItems();
      console.log("soy items", items);
      items.then((data) => {
        console.log("soy data", data);
        const itemsAux = [];
        console.log("soy itemsAux", itemsAux);
        data.forEach((item) => {
          itemsAux.push({
            id: item.id,
            Product_type: item.data().Product_type,
            Brand: item.data().Brand,
            Model: item.data().Model,
            Price: item.data().Price,
            Stock: item.data().Stock,
            Category: item.data().Category,
            Img_product: item.data().Img_product,
          });
          setProducts(itemsAux);
          setLoading(false);
        });
        console.log("esto trae products", products);
        console.log("esto trae loadings", loading);
      });
    }
  }, [Category]);

  return (
    <div className="item-list-conteiner">
      {loading ? (
        <h6>
          <div className="d-flex align-items-center">
            <strong>Cargando Productos...</strong>
            <div
              className="spinner-border ms-auto"
              role="status"
              aria-hidden="true"
            />
          </div>
        </h6>
      ) : (
        products.map((producto) => (
          <Item
            key={producto.id}
            product_type={producto.Product_type}
            brand={producto.Brand}
            model={producto.Model}
            price={producto.Price}
            stock={producto.Stock}
            category={producto.Category}
            img_product={producto.Img_product}
            id={producto.id}
          />
        ))
      )}
    </div>
  );
};

export default ItemList;
