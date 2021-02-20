import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <h1>Todo List</h1>
    <App />
  </StrictMode>,
  rootElement
);
