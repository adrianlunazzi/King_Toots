import React from "react";
import "./itemlistcontainer.css";

const ItemListContainer = ({ greeting }) => {
  return (
    <>
      <div className="container">
        <h3 className="greeting">{greeting}</h3>
      </div>
    </>
  );
};

export default ItemListContainer;
