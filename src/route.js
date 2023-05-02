import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Navbar from "./components/Navbar";
import ThirtyMin from "./components/ThirtyMin";
import Todo from "./components/Todo";

import Details from "./components/Details";
import Submit from "./components/Submit";
import Time from "./components/Time";

import Cancel from "./components/Cancel";
import Demo from "./Demos/demo";
import Demo1 from "./Demos/demo1";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },

      {
        path: "todo",
        element: <Todo />,
      },
      {
        path: "/:id",
        element: <ThirtyMin />,
      },
      {
        path: "/time/:dateStr",
        element: <Time />,
      },

      {
        path: "/details/:pathDetail",
        element: <Details />,
      },
    ],
  },
  {
    path: "/submit",
    element: <Submit />,
  },
  {
    path: "/demo",
    element: <Demo />,
  },
  {
    path: "/demo1",
    element: <Demo1 />,
  },
  {
    path: "/cancel",
    element: <Cancel />,
  },
]);
