import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { RankingProvider } from "./context/RankingContext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RankingProvider>
      <App />
    </RankingProvider>
  </StrictMode>,
);