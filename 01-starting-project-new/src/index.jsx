import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom"
import "./index.css";
import Root from "./routes/Root.jsx";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
    },
  ]);

const entryPoint = document.getElementById("root");

// ReactDOM.createRoot(entryPoint).render(<App />);
ReactDOM.createRoot(entryPoint).render(<Root />);