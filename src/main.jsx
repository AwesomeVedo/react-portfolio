import * as React from "react";
import * as ReactDOM from "react-dom/client";
//import Header from "./components/Header";
//import App from "./App";
import Portfolio from "./screens/Portfolio";
import Home from "./screens/Home";
import Resume from "./screens/Resume";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/resume",
    element: <Resume />,
  },
  {
    path: "/portfolio",
    element: <Portfolio />,
  },
];

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
    </RouterProvider>
  </React.StrictMode>
);
