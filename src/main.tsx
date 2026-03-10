import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "antd/dist/reset.css";
import "./index.css";
import App from "./App";
import Lab1 from "./pages/lab1";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Lab1 />
    </BrowserRouter>
  </StrictMode>
);
