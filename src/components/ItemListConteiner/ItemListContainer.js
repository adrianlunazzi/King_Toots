import React from "react";
import { items } from "./ItemList/ItemList";
import Item from "./Item/Item";

import "./itemlistcontainer.css";

const getItemList = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(items);
    }, 2000);
  });
};
getItemList().then((items) => console.log(items));

const itemProducts = items.map((item) => (
  <Item
    key={item.id}
    product_type={item.Product_type}
    brand={item.Brand}
    model={item.Model}
    price={"Precio $" + item.Price}
    img_product={item.Img_product}
    stock={item.Stock}
  />
));
const ItemListContainer = (props) => {
  return (
    <>
      <h3 className="greeting">{props.greeting}</h3>
      <div className="container">{itemProducts}</div>
    </>
  );
};

export default ItemListContainer;
