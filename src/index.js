import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MovieProvider } from "./reducer";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <MovieProvider>
      <App />
    </MovieProvider>
  </StrictMode>
);
