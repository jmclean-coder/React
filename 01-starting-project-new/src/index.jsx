import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
// import "./index.css";
import "./root.css";
import Root from "./routes/root.jsx";
import ErrorPage from "./pages/ErrorPage/ErrorPage.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        // element: <App />
        errorElement: <ErrorPage />
    }
])

const entryPoint = document.getElementById("root");
ReactDOM.createRoot(entryPoint).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);
