import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./screen/Home";
import "./App.css";
import PersonnalPage from "./screen/PersonnalPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/profile",
      element: <PersonnalPage />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
