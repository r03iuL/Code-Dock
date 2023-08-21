import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Homepage from "../Homepage/Home/Homepage";
import DashboardLayout from "../Layout/DashboardLayout/DashboardLayout";
import CreateNewRepo from "../Pages/CreateNewRepo";
import Login from "../Shared/Login";
import Repositories from "../DashboardPages/Repositories";
import Favourites from "../DashboardPages/Favourites";
import Trending from "../DashboardPages/Trending";
import RecentRepo from "../DashboardPages/RecentRepo";
import DashBoard from "../DashboardPages/DashBoard";
import Projects from "../Pages/DashboardFeaturesPage/Projects";
import Following from "../Pages/DashboardFeaturesPage/Following/Following";
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
        element: <DashBoard></DashBoard>,
      },
      {
        path: "recentActivities",
        element: <RecentRepo></RecentRepo>,
      },
      {
        path: "createNew",
        element: <CreateNewRepo></CreateNewRepo>,
      },
      {
        path: "repositories",
        element: <Repositories></Repositories>,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "favourites",
        element: <Favourites></Favourites>,
      },
      {
        path: "following",
        element: <Following />,
      },
      {
        path: "trending",
        element: <Trending></Trending>,
      },
    ],
  },
]);
