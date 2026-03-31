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
import { StoryList } from "./pages/lab5";
import EditStory from "./pages/lab6";
import { UserProvider } from "./context/UserContext";
import { ThemeProvider } from "./context/ThemeContext";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <UserProvider>
          <ThemeProvider>
        <App />
      </ThemeProvider>
        </UserProvider>
      </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>
);
