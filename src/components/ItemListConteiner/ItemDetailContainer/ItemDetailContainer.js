import { React, useState, useEffect } from "react";
import { items } from "../ItemList/ItemList";
import ItemDetail from "./ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    const getProductDetail = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(items);
        }, 2000);
      });
    };
    getProductDetail().then(items);
    getList();
    async function getList() {
      const productList = await getProductDetail();
      setList(productList);
    }
  }, []);
  const bajos = list.filter((bajo) => bajo.Category === "Bajo");
  const detailProducts = bajos.map((item) => (
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

  return (
    <div>
      <>{detailProducts}</>
    </div>
  );
};

export default ItemDetailContainer;
