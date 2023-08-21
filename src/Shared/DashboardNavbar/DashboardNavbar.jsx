import React from "react";
import { BiBookAdd, BiSearchAlt2 } from "react-icons/bi";
import { BsChatRightQuote } from "react-icons/bs";
import { MdSupportAgent } from "react-icons/md";
import { Link } from "react-router-dom";
import "./DashboardNavbar.css";

const DashboardNavbar = () => {
  return (
    <div className="hidden lg:flex navbar  justify-between px-[8%] py-[1.5%] bg-base-100 border-b-[3px] border-violet-600">
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
      <div className="flex gap-x-5 px-[8%] text-2xl">
        <p className="cursor-pointer" title="create new repositories">
          <Link to="/user/new">
            <BiBookAdd></BiBookAdd>
          </Link>
        </p>
        <p className="cursor-pointer" title="support">
          <Link to="/support">
            <MdSupportAgent></MdSupportAgent>
          </Link>
        </p>
        <p className="cursor-pointer" title="give feedback">
          <Link to="/feedback">
            <BsChatRightQuote></BsChatRightQuote>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default DashboardNavbar;
