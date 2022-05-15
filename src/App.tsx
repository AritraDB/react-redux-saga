import React from "react";
import "./App.css";
import Counter from "./counter/counter";

export default function App() {
  return (
    <div className="App">
      <h1>Basic Redux Implementation</h1>
      <h3 style={{ backgroundColor: "grey", padding: "1em", margin: 0 }}>
        Count is: {0}
      </h3>
      <Counter />
      <Counter />
    </div>
  );
}
