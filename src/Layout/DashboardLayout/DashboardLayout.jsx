import React from "react";
import { Outlet } from "react-router-dom";
import DashboardSidebar from "../../Shared/DashboardSidebar/DashboardSidebar";
import DashboardNavbar from "../../Shared/DashboardNavbar/DashboardNavbar";

const DashboardLayout = () => {
  return (
    <div className="flex w-full  bg-violet-50">
      <div className=" w-1/5 bg-white h-full sticky top-0 left-0 ">
        <DashboardSidebar></DashboardSidebar>
      </div>
      <div className="w-4/5">
        {/* for navbar in dashboard page  */}
        <DashboardNavbar></DashboardNavbar>
        {/* rest of the page content  */}
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashboardLayout;
