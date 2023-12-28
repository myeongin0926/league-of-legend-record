import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import GlobalStyles from "@mui/material/GlobalStyles";
import App from "./App";
import "./index.css";
import { THEME_GLOBAL_STYLES } from "./theme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(
  <BrowserRouter>
    <GlobalStyles styles={THEME_GLOBAL_STYLES} />
    <App />
  </BrowserRouter>,
);
