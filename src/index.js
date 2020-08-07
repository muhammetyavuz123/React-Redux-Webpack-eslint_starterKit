import React from "react";
import { render } from "react-dom";
// eslint-disable-next-line import/extensions
// import store from "./store/index";
// eslint-disable-next-line import/extensions
import App from './App';

// Easy access to the redux store for dev
// window.store = store;

render(
  <App />,
  document.getElementById("root")
);
