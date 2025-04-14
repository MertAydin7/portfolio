import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import App from "./App";
import "./index.css";
import { DesignModeProvider } from "./contexts/DesignModeContext";

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Failed to find the root element");

createRoot(rootElement).render(
  <StrictMode>
    <DesignModeProvider>
      <App />
    </DesignModeProvider>
  </StrictMode>
);
