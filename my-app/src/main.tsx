import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./app";

const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <App routes={undefined} />
    </StrictMode>,
  );
} else {
  throw new Error("Root element not found");
}
