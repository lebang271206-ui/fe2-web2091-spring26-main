import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "antd/dist/reset.css";
import "./index.css";
import App from "./App";
import Lab2 from "./pages/lab2";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Lab2 />
    </BrowserRouter>
  </StrictMode>
);
