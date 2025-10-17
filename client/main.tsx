import "./global.css";
import { createRoot } from "react-dom/client";
import App from "./App";

const rootElement = document.getElementById("root");
if (!rootElement) {
  console.error("Failed to find the root element");
  // Don't throw in production to prevent blank pages
  const fallbackDiv = document.createElement("div");
  fallbackDiv.innerHTML = `
    <div style="display: flex; align-items: center; justify-content: center; height: 100vh; font-family: Arial, sans-serif;">
      <div style="text-align: center;">
        <h1 style="color: #333; margin-bottom: 20px;">Portfolio Loading...</h1>
        <p style="color: #666;">Please refresh the page if this persists.</p>
      </div>
    </div>
  `;
  document.body.appendChild(fallbackDiv);
} else {
  const root = createRoot(rootElement);
  root.render(<App />);
}
