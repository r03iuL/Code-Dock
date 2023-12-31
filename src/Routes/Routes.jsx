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
import Blog from "../Homepage/BlogPage/AllBlog";
import GitBlog from "../Homepage/BlogPage/GitBlog";
import PrivateRoute from "./PrivateRoute";
import AboutUs from "../Homepage/AboutUs";
import Error from "../../Error";
import MainSnippet from "../Components/CodeSnippet/MainSnippet";
import SnippetView from "../Components/CodeSnippet/SnippetView";
import CodeView from "../Components/CodeSnippet/CodeView";
import Editormain from "./../CodeEditor/Editormain";
import HtmlBlog from "../Homepage/BlogPage/HtmlBlog";
import CssBlog from "../Homepage/BlogPage/CssBlog";
import JavascriptBlog from "../Homepage/BlogPage/JavascriptBlog";
import ReactBlog from "../Homepage/BlogPage/ReactBlog";
import AdminDashboard from "../Shared/AdminDashboard/AdminDashboard";
import UserManagement from "../Shared/AdminDashboard/UserManagement";
import AllUser from "../Pages/AllUser/AllUser";
import UserProfile from "../Pages/DashboardPages/UserProfile/UserProfile";
import RepoFolder from "../Pages/DashboardPages/Repositories/RepoFolder";
import Chat from "../Pages/Message/Chat";
import UserEditProfile from "../Pages/DashboardPages/UserProfile/UserEditProfile";
import { useState } from "react";
import ManageUsers from "../Pages/DashboardPages/ManageUsers/ManageUsers";




export const router = createBrowserRouter([

  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Homepage></Homepage>,
      },
      // {
      //   path:"/allUsers",
      //   element:<AllUser></AllUser>
      // },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
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
    element: (
      <PrivateRoute>
        <DashboardLayout ></DashboardLayout>
      </PrivateRoute>
    ),
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
        path: "userprofile",
        element: <UserProfile />,
      },
      {
        path: "setting",
        element: <UserEditProfile />
      },

      {
        path: "admindashboard",
        element: <AdminDashboard></AdminDashboard>,
      },
      {
        path: "manage-users",
        element: <ManageUsers></ManageUsers>
      },
      {
        path: "UserManagement",
        element: <UserManagement></UserManagement>,
      },
      {
        path: "recent",
        element: <RecentRepo></RecentRepo>,
      },
      {

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
        path: "repoFolder/:id",
        element: <RepoFolder></RepoFolder>,
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
      // {
      //   path: "messages",
      //   element: <Chat></Chat>,
      // },
      {
        path: "chat",
        element: <Chat />
      },
      {
        path: "trending",
        element: <Trending></Trending>,
      },
      {
        path: "code-editor",
        element: <Editormain></Editormain>,
      },
      {
        path: "code-snippet",
        element: <MainSnippet></MainSnippet>,
      },
      {
        path: "snippet/:id",
        element: <SnippetView></SnippetView>,
      },
      {
        path: "view-code/:id",
        element: <CodeView></CodeView>,
      },

      {
        path: "allblog",
        element: <Blog></Blog>,
      },
      {
        path: "gitblog",
        element: <GitBlog></GitBlog>,
      },
      {
        path: "htmlblog",
        element: <HtmlBlog></HtmlBlog>,
      },
      {
        path: "cssblog",
        element: <CssBlog></CssBlog>,
      },
      {
        path: "javablog",
        element: <JavascriptBlog></JavascriptBlog>,
      },
      {
        path: "reactblog",
        element: <ReactBlog></ReactBlog>,
      },
      {
        path: 'support',
        element: <Chat></Chat>
      },
      {
        path: "allUsers",
        element: <AllUser></AllUser>,
      }
    ],
  },

  {
    path: "*",
    element: <Error></Error>,
  },
]);
