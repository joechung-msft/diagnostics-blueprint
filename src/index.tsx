import React from "react";
import { createRoot } from "react-dom/client";
import ThemedApp from "./ThemedApp";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BlueprintProvider } from "@blueprintjs/core";

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <BlueprintProvider>
      <ThemedApp />
    </BlueprintProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
