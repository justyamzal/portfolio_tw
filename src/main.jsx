// ============================================================
//  main.jsx — Vite entry point
// ============================================================
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/globals.css";  // Tailwind @import + @theme + keyframes only
import App from "./App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
