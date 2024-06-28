import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store/store";
import App from "./App.jsx";
import "./scss/style.css";
import "./index.css";
import "boxicons";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App tab="home" />
    </Provider>
  </React.StrictMode>
);
