import React from "react";
import { Outlet } from "react-router-dom";
import DashboardSidebar from "../../Shared/DashboardSidebar";
import DashboardNavbar from "../../Shared/DashboardNavbar";

const DashboardLayout = () => {
  return (
    // after polishing

    <div className="flex w-full">
      <div className="w-1/5 ">
        <DashboardSidebar></DashboardSidebar>
      </div>
      <div className="w-4/5">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashboardLayout;
