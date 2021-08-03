import React, { useState } from "react";
import "./itemcount.css";

const useCounter = (initialValue = 0) => {
  const [count, setCount] = useState(initialValue);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };
  if (count < 0)
    return {
      count,
      increment,
    };
  else {
    return {
      count,
      increment,
      decrement,
    };
  }
};

export default function ItemCount() {
  const { count, increment, decrement } = useCounter();

  return (
    <>
      <div className="container-itemCount">
        <div className="container-buttons">
          <button className="btn-count" onClick={() => decrement()}>
            <i class="far fa-caret-square-down"></i>
          </button>
          <div className="quantity">{count}</div>
          <button className="btn-count" onClick={() => increment()}>
            <i class="far fa-caret-square-up"></i>
          </button>
        </div>
        <div className="container-buttons">
          <button className="btn-agregar-producto">
            Agregar {count} Productos al carrito
          </button>
        </div>
      </div>
    </>
  );
}
