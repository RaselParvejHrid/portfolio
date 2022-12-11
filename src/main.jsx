import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-photo-view/dist/react-photo-view.css";
import { PhotoProvider } from "react-photo-view";
import router from "./router";
import { RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PhotoProvider>
      <RouterProvider router={router} />
    </PhotoProvider>
    <ToastContainer />
  </React.StrictMode>
);
