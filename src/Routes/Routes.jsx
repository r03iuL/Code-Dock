import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Homepage from "../Homepage/Home/Homepage";
import DashboardLayout from "../Layout/DashboardLayout/DashboardLayout";
import Login from "../Shared/Login";
import CreateNewRepo from "../Pages/CreateNewRepo/CreateNewRepo";
import SignUp from "../Shared/SignUp";
import Secret from "../Shared/Secret";
import DashBoard from "../Pages/DashboardPages/DashBoard/DashBoard";
import RecentRepo from "../Pages/DashboardPages/RecentRepo/RecentRepo";
import Repositories from "../Pages/DashboardPages/Repositories/Repositories";
import Projects from "../Pages/DashboardPages/Projects/Projects";
import Favourites from "../Pages/DashboardPages/Favourites/Favourites";
import Following from "../Pages/DashboardPages/Following/Following";
import Trending from "../Pages/DashboardPages/Trending/Trending";
import SettingPage from "../Pages/SettingPage/SettingPage";
import Blog from "../Homepage/Blog";
import PrivateRoute from './PrivateRoute';
import AboutUs from "../Homepage/AboutUs";
import Error from "../../Error";
import MainSnippet from "../Components/CodeSnippet/MainSnippet";
import SnippetView from "../Components/CodeSnippet/SnippetView";
import CodeView from "../Components/CodeSnippet/CodeView";


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
        path: "blog",
        element: <Blog></Blog>,
      },
      {
        path: "about",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "secret",
        element: <Secret></Secret>,
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
    path: "/user",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        path: "/user",
        element: <SettingPage></SettingPage>,
      },
      {
        path: "dashboard",
        element: <DashBoard></DashBoard>,
      },
      {
        path: "recent",
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
        element: <Projects></Projects>,
      },
      {
        path: "favourites",
        element: <Favourites></Favourites>,
      },
      {
        path: "following",
        element: <Following></Following>,
      },
      {
        path: "trending",
        element: <Trending></Trending>,
      },
    ],
  },

  {
    path: 'code-snippet',
    element: <MainSnippet></MainSnippet>
  },
  {
    path: '/snippet/:id', 
    element: <SnippetView></SnippetView>
  },
  {
    path: '/view-code/:id', 
    element: <CodeView></CodeView>
  },

  {
    path: '*',
    element: <Error></Error>
  }

]);
