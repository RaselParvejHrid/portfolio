import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css";
import App from "./App";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-photo-view/dist/react-photo-view.css";
import { PhotoProvider } from "react-photo-view";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PhotoProvider>
      <App />
    </PhotoProvider>
    <ToastContainer />
  </React.StrictMode>
);
