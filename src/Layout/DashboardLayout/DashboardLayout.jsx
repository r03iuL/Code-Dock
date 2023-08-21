import React from "react";
import { Outlet } from "react-router-dom";
import DashboardSidebar from "../../Shared/DashboardSidebar";

const DashboardLayout = () => {
  return (
    <div className="flex w-full  bg-violet-50">
      <div className=" w-1/5 bg-white h-full fixed top-0 left-0 overflow-y-auto">
        <DashboardSidebar></DashboardSidebar>
      </div>
      <div className="w-4/5">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashboardLayout;
