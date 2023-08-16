import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Homepage from "../Homepage/Home/Homepage";
import DashboardLayout from "../Layout/DashboardLayout/DashboardLayout";

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
      
      }
    ],
  },
  {
    path: '/dashboard',
    element: <DashboardLayout></DashboardLayout>,
    children:[
      {
        path: '/dashboard/main',
        element: 'dashboard 1st children',
      },
      {
        path: 'recentActivities',
        element: 'recentActivities',
      },
      {
        path: 'createNew',
        element: 'createNew',
      },
      {
        path: 'repositories',
        element: 'Repositories',
      },
      {
        path: 'projects',
        element: 'Projects',
      },
      {
        path: 'favourites',
        element: 'Favourites',
      },
      {
        path: 'following',
        element: 'Following',
      },
      {
        path: 'trending',
        element: 'Trending',
      },
    ]
  }
]);
