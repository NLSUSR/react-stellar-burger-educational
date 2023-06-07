import "./index.css";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./services/reducers/root-reducer.js";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { Provider } from "react-redux";
import { DndProvider as DnD } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import App from "./components/app/app.jsx";
import reportWebVitals from "./reportWebVitals.ts";

const configure = configureStore({
  reducer: rootReducer,
  devTools: true,
});

const rootSelector = document.querySelector("#root");
const root = createRoot(rootSelector);

root.render(
  <StrictMode
    children={
      <Provider
        store={configure}
        children={<DnD backend={HTML5Backend} children={<App />} />}
      />
    }
  />
);

reportWebVitals();
