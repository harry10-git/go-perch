import "./App.css";
import React from "react";

import Levelup from "./components/pages/Levelup";
import Home from "./components/pages/Home";
import Parking from "./components/pages/Parking";
import Malls from "./components/pages/Malls";


// import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Analytics } from "@vercel/analytics/react";
import About from "./components/pages/About";


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
    {
      path: "/parking",
      element: <Parking />
    },
    {
      path: "/malls",
      element: <Malls/>
    },
    {
      path: "about",
      element: <About />
    }
  ]);
  return (
    <div className="App">

        <RouterProvider router={router} />


      <Analytics />
    </div>
  );
}

export default App;
