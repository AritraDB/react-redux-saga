import { applyMiddleware, combineReducers, createStore } from "redux";

import createSagaMiddleware from "@redux-saga/core";

import counterReducer from "./counter";
import userReducer from "./user";
import { watcherSaga } from "./saga/rootSaga";

const actualReducer = combineReducers({
  counter: counterReducer,
  userData: userReducer,
});

const sagaMiddleWare = createSagaMiddleware();
const middleware = [sagaMiddleWare];

const store = createStore(actualReducer, {}, applyMiddleware(...middleware));

sagaMiddleWare.run(watcherSaga);

export default store;
