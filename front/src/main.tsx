import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterDom } from "./app/router-dom.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterDom />
  </React.StrictMode>
);
