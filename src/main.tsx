import React from "react";
import ReactDOM from "react-dom/client";
import App from "./views/layout/App";
import DataProvider from "./context/DataContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <DataProvider>
      <App />
    </DataProvider>
  </React.StrictMode>
);
