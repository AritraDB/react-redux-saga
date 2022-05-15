import React, { useState } from "react";

export default function Counter() {
  const [count, setCounnt] = useState(0);

  const [localCount, setLocalCounnt] = useState(0);

  const handleIncrement = () => {
    setCounnt(count + 1);
    setLocalCounnt(localCount + 1);
  };
  const handleDecrement = () => {
    setCounnt(count - 1);
    setLocalCounnt(localCount - 1);
  };

  //   const handleIncrement = () => {
  //     setLocalCounnt(localCount + 1);
  //   };
  //   const handleDecrement = () => {
  //     setLocalCounnt(localCount - 1);
  //   };

  return (
    <>
      {/* <h3 style={{ backgroundColor: "grey", padding: "1em", margin: 0 }}>
        Count is: {count}
      </h3> */}
      <div style={{ backgroundColor: "blue", padding: "1em", margin: 2 }}>
        <h3>Local Count is:{localCount}</h3>
        <button onClick={handleIncrement}>increment</button>
        <button onClick={handleDecrement}>decrement</button>
      </div>
    </>
  );
}
