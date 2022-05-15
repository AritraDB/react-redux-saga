import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { doIncrement, doDecrement } from "../redux/counter";

export default function Counter() {
  const [localCount, setLocalCounnt] = useState(0);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    setLocalCounnt(localCount + 1);
    dispatch(doIncrement());
  };
  const handleDecrement = () => {
    setLocalCounnt(localCount - 1);
    dispatch(doDecrement());
  };

  return (
    <>
      <div style={{ backgroundColor: "blue", padding: "1em", margin: 2 }}>
        <h3>Local Count is:{localCount}</h3>
        <button onClick={handleIncrement}>increment</button>
        <button onClick={handleDecrement}>decrement</button>
      </div>
    </>
  );
}
