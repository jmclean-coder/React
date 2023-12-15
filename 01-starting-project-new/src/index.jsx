import * as React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom"
import "./index.css";
import Root from "./routes/Root.jsx";

//todo revist this when further along and break the UI into a logical system
const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      // todo errorPage,
      children: [
        {
          path: "react-essentials",
          element: <App />
        }
      ]
    },
  ]);

const entryPoint = document.getElementById("root");

// ReactDOM.createRoot(entryPoint).render(<App />);
ReactDOM.createRoot(entryPoint).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);