import React from "react";
import { Outlet } from "react-router-dom";
import DashboardSidebar from "../../Shared/DashboardSidebar";
import DashboardNavbar from "../../Shared/DashboardNavbar";

const DashboardLayout = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content bg-violet-50 flex flex-col  ">
        {/* dashboard top navbar */}
        <DashboardNavbar></DashboardNavbar>

        {/* toggle sidebar for small device */}
        <div className="lg:hidden navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <label htmlFor="my-drawer-2" tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
            </div>
          </div>
        </div>

        {/* Page content here */}
        <Outlet></Outlet>
        
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu w-80 h-full bg-white m-0 p-0">
          {/* Sidebar content here */}
          <DashboardSidebar></DashboardSidebar>
        </ul>
      </div>
    </div>
  );
};

export default DashboardLayout;
