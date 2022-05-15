import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Counter from "./counter/counter";

export default function App() {
  const counter = useSelector((state: any) => state.counter.count);

  return (
    <div className="App">
      <h1>Basic Redux Implementation</h1>
      <h3 style={{ backgroundColor: "grey", padding: "1em", margin: 0 }}>
        Count is: {counter}
      </h3>
      <Counter />
      <Counter />
    </div>
  );
}
