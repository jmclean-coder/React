import ReactDOM from "react-dom/client";
import { StrictMode } from "react";

import App from "./App.jsx";
import Header from "./components/Header/Header";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header />
    <App />
  </StrictMode>
);
