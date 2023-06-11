import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./tailwind.css";
import "./style.css";
import { ToastContainer } from "react-toastify";
import Kommunicate from "@kommunicate/kommunicate-chatbot-plugin";
Kommunicate.init("20699085bb132e7b43419bac0c3885085", {
  automaticChatOpenOnNavigation: true,
  popupWidget: true
});
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <ToastContainer theme="colored" autoClose={1000} />
  </React.StrictMode>
);
