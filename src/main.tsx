import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "antd/dist/reset.css";
import "./index.css";
import App from "./App";
import Add from "./lab3/Add";
import Login from "./lab3/Login";
import Register from "./lab3/Register";
import StoryForm from "./pages/lab4";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element = {<StoryForm></StoryForm>}></Route>
        {/* <Route path="/add" element = {<Add></Add>}></Route>
        <Route path="/login" element = {<Login></Login>}></Route>
        <Route path="/register" element = {<Register></Register>}></Route> */}
      </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>
);
