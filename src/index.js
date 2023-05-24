import "./index.css";
import ReactDOM from "react-dom/client";
import React from "react";
import App from "./components/app/app.jsx";
import reportWebVitals from "./reportWebVitals.ts";

ReactDOM.createRoot(document.querySelector("#root")).render(
  <React.StrictMode children={<App />} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
