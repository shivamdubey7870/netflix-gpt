import React from "react";
import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Toggle from "./Toggle";
import Login1 from "./Login1";
import Register from "./Register";


const Body = () => {

 

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
     {
      path: "/toggle",
      element: <Toggle />,
    },
     {
      path: "/login1",
      element: <Login1 />,
    },
     {
      path: "/register",
      element: <Register />,
    }
  ]);


  return <RouterProvider router={appRouter} />;
};

export default Body;
