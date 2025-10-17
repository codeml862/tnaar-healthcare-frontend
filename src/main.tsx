import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Simple error handling
const rootElement = document.getElementById("root");
if (rootElement) {
  try {
    createRoot(rootElement).render(<App />);
  } catch (error) {
    console.error("Error rendering app:", error);
    rootElement.innerHTML = `
      <div style="padding: 20px; background: #fee; border: 1px solid #fcc; color: #c33;">
        <h2>Error rendering application</h2>
        <p>Please check the browser console for more details.</p>
      </div>
    `;
  }
} else {
  console.error("Root element not found");
  document.body.innerHTML = `
    <div style="padding: 20px; background: #fee; border: 1px solid #fcc; color: #c33;">
      <h2>Root element not found</h2>
      <p>Could not find element with id 'root' in the document.</p>
    </div>
  `;
}