import "./index.css";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./services/reducers/root-reducer.js";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { Provider } from "react-redux";
import App from "./components/app/app.jsx";
import reportWebVitals from "./reportWebVitals.ts";

const configure = configureStore({
  reducer: rootReducer,
  devTools: true,
});

const rootSelector = document.querySelector("#root");
const root = createRoot(rootSelector);

root.render(
  <StrictMode>
    <Provider store={configure}>
      <App />
    </Provider>
  </StrictMode>
);

reportWebVitals();
