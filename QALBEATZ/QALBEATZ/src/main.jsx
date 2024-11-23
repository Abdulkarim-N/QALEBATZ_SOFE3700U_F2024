import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import User from "./routes/user";
import Root from "./routes/root";
import Login from "./routes/login";
import Signup from "./routes/signup";
import { paths } from "./shared/routes";
import "./index.css";
import Home from "./routes/home";
import UserHome from "./routes/userhome";
import Playlist from "./routes/playlist";
import UserPlaylist from "./routes/userplaylist";
import Journal from "./routes/journal";

const router = createBrowserRouter([
  {
    path: paths.LOGIN,
    element: <Login />,
  },

  {
    path: paths.SIGNUP,
    element: <Signup />,
  },

  {
    path: paths.LOGGED,
    element: <User />,
    children: [
      {
        index : true,
        element: <UserHome />,
      },

      {
        path: paths.USERPLAYLIST,
        element: <UserPlaylist />,
      },
    ],
  },
  {
    path: paths.JOURNAL,
    element: <Journal />,
  },
  {
    path: paths.HOME,
    element: <Root />,
    children: [
      {
        path: paths.HOME,
        element: <Home />,
      },

      {
        path: paths.PLAYLIST,
        element: <Playlist />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
