import React from "react";
import { RiGitRepositoryLine } from "react-icons/ri";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const DashBoard = () => {
  return (
    <div className="px-[4%] py-[3%]">
      {/* dashboard details  */}
      <div className="flex">
        <div className="box-style">
          <p className="flex items-center justify-between mb-4">
            {/* user repositories number */}
            <span className="font-semibold text-xl">23</span>
            <span className="bg-violet-200 rounded-md p-2 text-2xl">
              <RiGitRepositoryLine></RiGitRepositoryLine>
            </span>
          </p>
          <p className="text-gray-500 text-lg">Total Repositories</p>p
        </div>
      </div>

      {/* recent in dashboard section  */}
      <div className="box-style my-[3%]">
        <SectionTitle heading="Recent Activities"></SectionTitle>
      </div>
    </div>
  );
};

export default DashBoard;
