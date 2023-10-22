import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider as EmailProvider } from "./context/email-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <EmailProvider>
    <App />
  </EmailProvider>
);
