import React from "react";
import { BiBookAdd, BiSearchAlt2 } from "react-icons/bi";
import { BsChatRightQuote } from "react-icons/bs";
import { MdSupportAgent } from "react-icons/md";
import { PiNotePencilBold } from "react-icons/pi";

import { Link } from "react-router-dom";
import "./DashboardNavbar.css";

const DashboardNavbar = () => {
  return (
    <div className="hidden lg:flex navbar justify-between items-center px-[8%] py-[1.5%] bg-base-100 border-b-[3px] border-violet-600">
      {/* navbar search option  */}
      <div className="relative w-1/3   rounded ">
        <div className="absolute my-auto left-2">
          <BiSearchAlt2 className="text-xl"></BiSearchAlt2>
        </div>

        {/* input field  */}
        <input
          type="text"
          placeholder="Search"
          className=" bg-violet-50 w-full rounded-sm  pl-8 h-12 focus:outline-none "
        />

        {/* search button  */}
        <div className="absolute right-[8px]">
          <button className="bg-violet-500 text-white font-semibold text-base  text-center  rounded-sm   px-5 py-[6px] hover:bg-violet-700">
            Search
          </button>
        </div>
      </div>

      {/* navbar options  */}
      <div className="gap-5 text-3xl ">
        <Link
          to="/user/createNew"
          className="cursor-pointer text-violet-600"
          title="Create New Repositories"
        >
          <BiBookAdd></BiBookAdd>
        </Link>
        <Link
          to="/user/code-editor"
          className="cursor-pointer text-violet-600"
          title="Code Editor "
        >
          <PiNotePencilBold></PiNotePencilBold>
        </Link>
        <Link to="/support" className="cursor-pointer text-violet-600" title="Support">
          <MdSupportAgent></MdSupportAgent>
        </Link>
        <Link to="/feedback" className="cursor-pointer text-violet-600" title="Feedback">
          <BsChatRightQuote></BsChatRightQuote>
        </Link>
      </div>
    </div>
  );
};

export default DashboardNavbar;
