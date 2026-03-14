import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "antd/dist/reset.css";
import "./index.css";
import App from "./App";
import Add from "./lab3/add";
import Login from "./lab3/Login";
import Register from "./lab3/Register";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<App></App>}></Route>
        <Route path="/add" element = {<Add></Add>}></Route>
        <Route path="/login" element = {<Login></Login>}></Route>
        <Route path="/register" element = {<Register></Register>}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
