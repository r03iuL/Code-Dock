import React from "react";
import { Link, Outlet } from "react-router-dom";
import DashboardSidebar from "../../Shared/DashboardSidebar/DashboardSidebar";
import DashboardNavbar from "../../Shared/DashboardNavbar/DashboardNavbar";
import { BsThreeDotsVertical } from "react-icons/bs";

const DashboardLayout = () => {
  return (
    <>
    {/* this is header for small screen and in lg screen it will be hidden */}
      <div className="lg:hidden navbar bg-base-100 fixed top-0 left-0 right-0 z-10 border-b-2 border-violet-600">
        <div className="navbar-start">
          <div className="logo">
            <p className="italic  text-3xl text-center fost">
              <Link to="/">
                Code<span className="text-violet-600">Dock</span>
              </Link>
            </p>
          </div>
        </div>
        <div className="navbar-center"></div>
        <div className="navbar-end">
          <label
            htmlFor="my-drawer-2"
            className="btn bg-violet-50 drawer-button lg:hidden"
          >
            <BsThreeDotsVertical className="text-xl text-violet-600"></BsThreeDotsVertical>
          </label>
        </div>
      </div>

      {/* this will be show on lg screen */}
      <div className="flex w-full  bg-violet-50">
        <div className="drawer lg:drawer-open">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            <DashboardNavbar></DashboardNavbar>
            {/* Page content here */}
            <div className="mt-16 lg:mt-auto">
              <Outlet></Outlet>
            </div>
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
            <ul className="menu w-80 h-full bg-base-200 text-base-content">
              {/* Sidebar content here */}
              <DashboardSidebar></DashboardSidebar>
            </ul>
          </div>
        </div>

        {/* <div className=" w-1/5 bg-white h-full sticky top-0 left-0 ">
        <DashboardSidebar></DashboardSidebar>
      </div>
      <div className="w-4/5">
        for navbar in dashboard page 
        <DashboardNavbar></DashboardNavbar>
        rest of the page content 
        <Outlet></Outlet>
      </div> */}
      </div>
    </>
  );
};

export default DashboardLayout;
