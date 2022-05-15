import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Counter from "./counter/counter";
import { getUser } from "./redux/user";

export default function App() {
  const counter = useSelector((state: any) => state.counter.count);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  const user = useSelector((state: any) => state.userData.user);
  const { id, title } = user ?? {};

  return (
    <div className="App">
      <h1>Basic Redux Implementation</h1>
      <h2>Data from API through Saga</h2>
      <p>user id: {id ?? ""}</p>
      <p>title: {title ?? ""}</p>
      <h3 style={{ backgroundColor: "grey", padding: "1em", margin: 0 }}>
        Global Count is: {counter}
      </h3>
      <Counter />
      <Counter />
    </div>
  );
}
