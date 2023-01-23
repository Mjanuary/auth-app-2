import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { App } from "./App";
import { reducers } from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension"; // redux-chrome-tool
import "./index.css";
import "animate.css";

// const store = createStore(reducers, applyMiddleware(thunk));
const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
); // redux-chrome-tool enabled

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.querySelector("#root")
);
