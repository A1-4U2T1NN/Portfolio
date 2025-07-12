import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./app";
import { Analytics } from '@vercel/analytics/next';

const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <App routes={undefined} />
      <Analytics />
    </StrictMode>,
  );
} else {
  throw new Error("Root element not found");
}
