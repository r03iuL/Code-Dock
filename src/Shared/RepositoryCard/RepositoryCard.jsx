/* eslint-disable no-unused-vars */
import React from "react";
import { FaFolder, FaRegHeart } from "react-icons/fa";

const RepositoryCard = ({ repo }) => {
  const {
    repoName,
    authorName,
    creationDate,
    status,
    rating,
    numberOfRatings,
    types,
  } = repo;

  return (
    <div className="flex justify-between items-center px-[8%] py-4 my-3 border-b-2 border-violet-600">
      {/* <div className="h-[1px] w-full  bg-purple-700"></div> */}

      <div className="flex items-center gap-x-6">
        <div className="">
          <FaFolder className="text-4xl text-purple-500"></FaFolder>
        </div>
        <div className="">
          <p className="text-gray-600 font-semibold text-xl">{repoName}</p>
          <p className="text-gray-500 text-sm">{authorName}</p>
          <p className="text-gray-500 text-sm">{creationDate}</p>
        </div>
        <div className="bg-violet-500 text-white text-center rounded-md px-3 py-1 text-base">
          {status}
        </div>
      </div>
      <div className="">
        <p>
          <FaRegHeart className="text-2xl mx-auto text-purple-500 cursor-pointer"></FaRegHeart>{" "}
        </p>

        {/* ratings of this repository  */}
        <p className="text-gray-500 text-base text-center">{rating}</p>

        {/* total reviews will be here  */}
        <p className="text-gray-500 text-base">{numberOfRatings} reviews</p>
      </div>
    </div>
  );
};

export default RepositoryCard;
