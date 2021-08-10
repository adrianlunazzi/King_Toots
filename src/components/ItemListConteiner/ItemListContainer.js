import React from "react";
import Item from "./Item/Item";
import "./itemlistcontainer.css";

const items = [
  {
    id: 1,
    Product_type: "Guitarra Eléctrica",
    Brand: "Fender",
    Model: "Stratocaster",
    Price: 85000,
    Img_product: <img src="/images/thumbs/stratocaster.jpg" alt="" />,
  },
  {
    id: 2,
    Product_type: "Guitarra Eléctrica",
    Brand: "Fender",
    Model: "Telecaster",
    Price: 60000,
    Img_product: <img src="/images/thumbs/telecaster.jpg" alt="" />,
  },
  {
    id: 3,
    Product_type: "Guitarra Eléctrica",
    Brand: "Gibson",
    Model: "Les Paul Clasic",
    Price: 110000,
    Img_product: <img src="/images/thumbs/les-paul.jpg" alt="" />,
  },
  {
    id: 4,
    Product_type: "Guitarra Eléctrica",
    Brand: "Gibson",
    Model: "SG",
    Price: 85000,
    Img_product: <img src="/images/thumbs/sg.jpg" alt="" />,
  },
  {
    id: 5,
    Product_type: "Guitarra Eléctrica",
    Brand: "Ibanez",
    Model: "GRx 70Qa",
    Price: 75000,
    Img_product: <img src="/images/thumbs/GRx70Qa.jpg" alt="" />,
  },
  {
    id: 6,
    Product_type: "Guitarra Eléctrica",
    Brand: "Jackson",
    Model: "Dinky JS12",
    Price: 60000,
    Img_product: <img src="/images/thumbs/DinkyJS12.jpg" alt="" />,
  },
];

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
