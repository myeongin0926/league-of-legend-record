import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import GlobalStyles from "@mui/material/GlobalStyles";
import { Provider } from "react-redux";
import { createStore } from "redux";
import App from "./App";
import { THEME_GLOBAL_STYLES } from "./theme";
import rootReducer from "./modules";

const store = createStore(rootReducer);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(
  <BrowserRouter>
    <GlobalStyles styles={THEME_GLOBAL_STYLES} />
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
);
