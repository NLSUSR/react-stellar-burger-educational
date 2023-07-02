import { StrictMode } from "react";
import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";

import reportWebVitals from "./utils-from-react/reportWebVitals";
import rootReducer from "./services/store/reducers/root-reducer";
import Application from "./components/application/application";

const configure = configureStore({
  reducer: rootReducer,
  devTools: true,
});

createRoot(document.querySelector("#root")).render(
  <StrictMode>
    <Provider store={configure}>
      <BrowserRouter>
        <Application />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);

reportWebVitals();
