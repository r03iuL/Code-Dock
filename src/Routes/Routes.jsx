import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Homepage from "../Homepage/Home/Homepage";
import DashboardLayout from "../Layout/DashboardLayout/DashboardLayout";
import CreateNewRepo from "../Pages/CreateNewRepo";
import Login from "../Shared/Login";
import Repositories from "../DashboardPages/Repositories";
import Favourites from "../DashboardPages/Favourites";
import Trending from "../DashboardPages/trending";
import RecentRepo from "../DashboardPages/RecentRepo";
import DashBoard from "../DashboardPages/DashBoard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Homepage></Homepage>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      }
    ],
  },
  {
    path: '/dashboard',
    element: <DashboardLayout></DashboardLayout>,
    children:[
      {
        path: '/dashboard/main',
        element: <DashBoard></DashBoard>,
      },
      {
        path: 'recentActivities',
        element: <RecentRepo></RecentRepo>,
      },
      {
        path: 'createNew',
        element: <CreateNewRepo></CreateNewRepo>,
      },
      {
        path: 'repositories',
        element: <Repositories></Repositories>,
      },
      {
        path: 'projects',
        element: 'Projects',
      },
      {
        path: 'favourites',
        element: <Favourites></Favourites>,
      },
      {
        path: 'following',
        element: 'Following',
      },
      {
        path: 'trending',
        element: <Trending></Trending>,
      },
    ]
  }
]);
