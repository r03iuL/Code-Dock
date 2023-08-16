import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { BiSolidDashboard, BiSolidTimer, BiLogOutCircle } from 'react-icons/bi';
import { RiGitRepositoryLine } from 'react-icons/ri';
import { AiFillProject } from 'react-icons/ai';
import { MdOutlineFavorite } from 'react-icons/md';
import { SlUserFollowing } from 'react-icons/sl';
import { HiOutlineTrendingUp } from 'react-icons/hi';

const DashboardLayout = () => {
  const navlinks = [
    {
      url: "/dashboard/main",
      featureName: "Dashboard",
      icon: <BiSolidDashboard className="text-lg mr-1"></BiSolidDashboard>
    },
    {
      url: "/dashboard/recentActivities",
      featureName: "Recent Activities",
      icon: <BiSolidTimer className="text-lg mr-1"></BiSolidTimer>
    },
    {
      url: "/dashboard/repositories",
      featureName: "Repositories",
      icon: <RiGitRepositoryLine className="text-lg mr-1"></RiGitRepositoryLine>
    },
    {
      url: "/dashboard/projects",
      featureName: "Projects",
      icon: <AiFillProject className="text-lg mr-1"></AiFillProject>
    },
    {
      url: "/dashboard/favourites",
      featureName: "Favourites",
      icon: <MdOutlineFavorite className="text-lg mr-1"></MdOutlineFavorite>
    },
    {
      url: "/dashboard/following",
      featureName: "Following",
      icon: <SlUserFollowing className="text-lg mr-1"></SlUserFollowing>
    },
    {
      url: "/dashboard/trending",
      featureName: "Trending",
      icon: <HiOutlineTrendingUp className="text-lg mr-1"></HiOutlineTrendingUp>
    },
    {
      url: "/logout",
      featureName: "Log Out",
      icon: <BiLogOutCircle className="text-lg mr-1"></BiLogOutCircle>
    },
  ];
  //   console.log(navlinks[0])
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content bg-violet-50 flex flex-col  ">
        <div className="navbar justify-end bg-base-100">
          <div className="flex-none gap-2">
            <div className="form-control">
              <input
                type="text"
                placeholder="Search"
                className="input input-bordered w-24 md:w-auto"
              />
            </div>
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </label>
            </div>
          </div>
        </div>
        {/* Page content here */}
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu w-80 h-full bg-white m-0 p-0">
          {/* Sidebar content here */}
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
          <li className="text-center font-bold text-xl">Profile Name</li>
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
        </ul>
      </div>
    </div>
  );
};

export default DashboardLayout;
