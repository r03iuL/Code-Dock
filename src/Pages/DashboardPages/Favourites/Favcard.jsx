import React from "react";
import { FaFolder, FaHeart } from "react-icons/fa";

const Favcard = ({fav}) => {
  const {
    repoName,
    authorName,
    creationDate,
    status,
    rating,
    numberOfRatings,
    types,
  } = fav;
  return (
    <div>
      <div>
        <div className=" ">
          <div className="h-1 w-full  bg-purple-700"></div>
          <div className="">
            <div className="flex py-4 max-w-screen-xl mx-auto items-center  justify-between">
              <div className="flex items-center gap-5">
                <div className="">
                  {" "}
                  <FaFolder className="text-8xl text-purple-700"></FaFolder>
                </div>
                <div className="w-60">
                  <div className="text-2xl font-semibold"> {repoName} </div>
                  <div className="text-lg font-semibold"> {authorName} </div>
                  <div className="text-lg font-semibold"> {creationDate} </div>
                </div>
                <div className="">
                  <div className="text-lg font-semibold  ">{status}</div>
                </div>
                <div className="">
                  <div className="text-lg font-semibold ">({types})</div>
                </div>
              </div>
              <div className="">
                <div className="">
                  <FaHeart className="text-4xl mx-auto text-rose-600"></FaHeart>{" "}
                </div>
                <div className="text-lg font-semibold">Rating: {rating}</div>
                <div className="text-lg font-semibold">Rated by: {numberOfRatings}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favcard;
