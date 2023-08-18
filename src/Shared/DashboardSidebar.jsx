import React from 'react';
import { NavLink } from "react-router-dom";
import {
  BiSolidDashboard,
  BiSolidTimer,
  BiLogOutCircle,
} from "react-icons/bi";
import { PiChatTextBold } from "react-icons/pi";
import { IoMdNotifications } from "react-icons/io";
import { RiGitRepositoryLine, RiGitPullRequestFill } from "react-icons/ri";
import { AiFillProject } from "react-icons/ai";
import { MdOutlineFavorite } from "react-icons/md";
import { SlUserFollowing } from "react-icons/sl";
import { HiOutlineTrendingUp } from "react-icons/hi";

const DashboardSidebar = () => {
    const navlinks = [
        {
          url: "/dashboard/main",
          featureName: "Dashboard",
          icon: <BiSolidDashboard className="text-lg mr-1"></BiSolidDashboard>,
        },
        {
          url: "/dashboard/recentActivities",
          featureName: "Recent Activities",
          icon: <BiSolidTimer className="text-lg mr-1"></BiSolidTimer>,
        },
        {
          url: "/dashboard/repositories",
          featureName: "Repositories",
          icon: (
            <RiGitRepositoryLine className="text-lg mr-1"></RiGitRepositoryLine>
          ),
        },
        {
          url: "/dashboard/createNew",
          featureName: "Create New Repository",
          icon: (
            <RiGitRepositoryLine className="text-lg mr-1"></RiGitRepositoryLine>
          ),
        },
        {
          url: "/dashboard/projects",
          featureName: "Projects",
          icon: <AiFillProject className="text-lg mr-1"></AiFillProject>,
        },
        {
          url: "/dashboard/favourites",
          featureName: "Favourites",
          icon: <MdOutlineFavorite className="text-lg mr-1"></MdOutlineFavorite>,
        },
        {
          url: "/dashboard/following",
          featureName: "Following",
          icon: <SlUserFollowing className="text-lg mr-1"></SlUserFollowing>,
        },
        {
          url: "/dashboard/trending",
          featureName: "Trending",
          icon: (
            <HiOutlineTrendingUp className="text-lg mr-1"></HiOutlineTrendingUp>
          ),
        },
        {
          url: "/logout",
          featureName: "Log Out",
          icon: <BiLogOutCircle className="text-lg mr-1"></BiLogOutCircle>,
        },
      ];
    return (
        <>
            <li className="font-extrabold text-center font-mono text-4xl italic my-5">
            C0de_&gt;d0ck
          </li>
          <li className="mx-auto">
            <div className="avatar ">
              <div className="w-24 rounded-full">
                <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" />
              </div>
            </div>
          </li>
          <li className="text-center font-bold text-xl mt-2 mb-5">
            Profile Name
          </li>
          <div className="flex justify-center gap-6 text-3xl text-gray-700 mb-8">
            <PiChatTextBold title="Chat"></PiChatTextBold>
            <IoMdNotifications title="Notification"></IoMdNotifications>
            <RiGitPullRequestFill title="Pull Request"></RiGitPullRequestFill>
          </div>
          {navlinks.map((e, i) => (
            <li className="text-lg" key={i}>
              <NavLink
                to={e.url}
                className={({ isActive }) =>
                  isActive ? "activeLink" : "nonActiveLink"
                }
              >
                {e?.icon}
                {e.featureName}
              </NavLink>
            </li>
          ))}
        </>
    );
};

export default DashboardSidebar;