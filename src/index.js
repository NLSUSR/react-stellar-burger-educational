import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/app/app.jsx";
import reportWebVitals from "./reportWebVitals.ts";

ReactDOM.createRoot(document.querySelector("#root")).render(<React.StrictMode children={<App />} />);

reportWebVitals();
