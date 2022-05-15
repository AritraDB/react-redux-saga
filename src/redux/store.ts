import { combineReducers, createStore } from "redux";
import counterReducer from "./counter";

const actualReducer = combineReducers({
  counter: counterReducer,
});
const store = createStore(actualReducer);

export default store;
