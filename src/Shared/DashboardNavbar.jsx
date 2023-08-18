import React from "react";
import { BiBookAdd, BiSearchAlt2 } from "react-icons/bi";
import { BsChatRightQuote } from "react-icons/bs";
import { MdSupportAgent } from "react-icons/md";
import { Link } from "react-router-dom";

const DashboardNavbar = () => {
  return (
    <div className="hidden lg:flex navbar pr-5 justify-end bg-base-100 border-b-4 border-violet-600">
      <div className="flex-none gap-2">
        <div className="form-control relative">
          <div className="absolute top-[10px] left-2">
            <BiSearchAlt2 className="text-xl"></BiSearchAlt2>
          </div>
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-40 md:w-[300px] rounded-md h-10 pl-8 mr-2"
          />
        </div>
        <div className="flex items-center gap-3 text-3xl">
          <p className="cursor-pointer" title="create new repositories">
            <Link to="/dashboard/new">
              <BiBookAdd></BiBookAdd>
            </Link>
          </p>
          <p className="cursor-pointer" title="support">
            <Link to="">
              <MdSupportAgent></MdSupportAgent>
            </Link>
          </p>
          <p className="cursor-pointer" title="give feedback">
            <Link to="">
              <BsChatRightQuote></BsChatRightQuote>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DashboardNavbar;
