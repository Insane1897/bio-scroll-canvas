import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // 1. Import BrowserRouter
import App from "./App.tsx";
import "./index.css";

// 2. Wrap your <App /> component with BrowserRouter and add the basename
createRoot(document.getElementById("root")!).render(
  <BrowserRouter basename="/bio-scroll-canvas/">
    <App />
  </BrowserRouter>
);
