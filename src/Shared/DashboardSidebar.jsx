import React from "react";
import { Link, NavLink } from "react-router-dom";
import { BiSolidDashboard, BiSolidTimer, BiLogOutCircle } from "react-icons/bi";
import { PiChatTextBold } from "react-icons/pi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { RiGitRepositoryLine, RiGitPullRequestFill } from "react-icons/ri";
import { AiFillProject } from "react-icons/ai";
import { MdOutlineFavorite } from "react-icons/md";
import { SlUserFollowing } from "react-icons/sl";
import { HiOutlineTrendingUp } from "react-icons/hi";
import useAuth from "../Hooks/useAuth/useAuth";
import "./dashboardSidebar.css";
import ActiveDashboardLink from "../Components/ActiveDashboardLink/ActiveDashboardLink";

const DashboardSidebar = () => {
  const { user } = useAuth();
  console.log(user?.photoURL);

  //beacuse at first loading here user is null...
  if (user === null) {
    // Handle loading state, possibly showing a loading spinner or placeholder
    return (
      <p className="text-center text-2xl font-extrabold text-violet-400">
        Loading...
      </p>
    );
  }

  return (
    <div className="py-[5%]">
      {/* logo  */}
      <div className="logo">
        <p className="italic  text-3xl text-center fost">
          <Link to="/">
            Code<span className="text-violet-600">Dock</span>
          </Link>
        </p>
      </div>

      {/* image and icon under the image  */}
      <div className="py-[5%] text-center">
        <Link to="/user">
          <img
            src={user?.photoURL}
            alt={user?.displayName}
            className="mx-auto rounded-[50%] border-4 border-violet-400 w-[70px]"
          />
        </Link>

        {/* user name  */}
        <p className="text-gray-500 text-xl font-semibold my-[3%]">
          {user.displayName}
        </p>

        {/* user options  */}
        <div className="flex justify-center text-xl gap-x-5">
          <p>
            <Link to="/user/messages">
              <PiChatTextBold></PiChatTextBold>
            </Link>
          </p>
          <p>
            <Link to="/user/notifications">
              <IoMdNotificationsOutline></IoMdNotificationsOutline>
            </Link>
          </p>
          <p>
            <Link to="/user/pullrequests">
              <RiGitPullRequestFill></RiGitPullRequestFill>
            </Link>
          </p>
        </div>
      </div>

      {/* navbar options  */}
      <div className="">
        <ul>
          <li className="  ">
            <ActiveDashboardLink to="/user/dashboard">
              <div className="">
                <BiSolidDashboard></BiSolidDashboard>
              </div>
              <div className="">Dashboard</div>
            </ActiveDashboardLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardSidebar;
