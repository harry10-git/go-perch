import "./App.css";
import React from "react";

import Levelup from "./components/pages/Levelup";
import Home from "./components/pages/Home";

// import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Analytics } from "@vercel/analytics/react";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/levelup",
      element: <Levelup />,
    },
  ]);
  return (
    <div className="App">

        <RouterProvider router={router} />


      <Analytics />
    </div>
  );
}

export default App;
