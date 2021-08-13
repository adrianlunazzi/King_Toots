import React from "react";
import { items } from "../ItemList/ItemList";
import ItemDetail from "./ItemDetail/ItemDetail";

const getProductDetail = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(items);
    }, 2000);
  });
};
getProductDetail().then((items) => console.log(items));

const detailProducts = items.map((item) => (
  <ItemDetail
    key={item.id}
    product_type={item.Product_type}
    brand={item.Brand}
    model={item.Model}
    price={"Precio $" + item.Price}
    img_product={item.Img_product}
    stock={item.Stock}
  />
));

const ItemDetailContainer = () => {
  return (
    <div>
      <>{detailProducts}</>
    </div>
  );
};

export default ItemDetailContainer;
