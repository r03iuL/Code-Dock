import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Homepage from "../Homepage/Home/Homepage";
import DashboardLayout from "../Layout/DashboardLayout/DashboardLayout";
import Login from "../Shared/Login";
import SignUp from "../Shared/SignUp";
import PrivateRoute from "./PrivateRoute";
import Secret from "../Shared/Secret";
import CreateNewRepo from "../Pages/CreateNewRepo";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Homepage></Homepage>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "secret",
        element: (
          <PrivateRoute>
            <Secret></Secret>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        path: "/dashboard/main",
        element: "dashboard 1st children",
      },
      {
        path: "recentactivities",
        element: "recentActivities",
      },
      {
        path: "new",
        element: <CreateNewRepo></CreateNewRepo>,
      },
      {
        path: "repositories",
        element: "Repositories",
      },
      {
        path: "projects",
        element: "Projects",
      },
      {
        path: "favourites",
        element: "Favourites",
      },
      {
        path: "following",
        element: "Following",
      },
      {
        path: "trending",
        element: "Trending",
      },
    ],
  },
]);
