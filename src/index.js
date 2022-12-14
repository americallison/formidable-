import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from "./App";
import Login from "./components/auth/Login";
import FormCreation from "./components/FormCreation";
import Pricing from "./components/Pricing";
import SignUp from "./components/auth/SignUp";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "/signup",
    element: <SignUp />,
  },

  {
    path: "/formcreation",
    element: <FormCreation />,
  },

  {
    path: "/pricing",
    element: <Pricing />,
  },



]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);