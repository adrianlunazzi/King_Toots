import React, { useEffect, useState } from "react";
import "./itemcount.css";

export default function ItemCount({
  stock,
  defaultValue = 1,
  onAdd = () => {},
}) {
  const [count, setCount] = useState(defaultValue);
  const increment = () => {
    if (count < stock) {
      setCount(count + 1);
    } else {
      setCount(count);
    }
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  useEffect(() => {
    onAdd(count);
  }, [count]);

  return (
    <>
      <div className="container-itemCount">
        <div className="container-buttons">
          <button className="btn-count" onClick={decrement}>
            <i className="far fa-caret-square-down"></i>
          </button>
          <div className="quantity">{count}</div>
          <button className="btn-count" onClick={increment}>
            <i className="far fa-caret-square-up"></i>
          </button>
        </div>
      </div>
    </>
  );
}
