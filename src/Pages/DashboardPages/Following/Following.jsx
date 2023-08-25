import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import FollowingCard from "./FollowingCard";

const Following = () => {
  const [following, setFollowing] = useState([]);

  useEffect(() => {
    fetch("/following.json")
      .then((res) => res.json())
      .then((data) => setFollowing(data));
  }, []);
//   console.log(following);

  return (
    <div className="p-5">
      <div className="bg-white py-6  px-8">
        <div className="items-center mb-8">
          <div className="relative">
            <FaSearch className="absolute left-60 bottom-4 text-xl"></FaSearch>
            <input
              className="bg-gray-200 rounded-md text-xl py-3 pl-2 pr-10 outline-none"
              placeholder="Search"
              type="text"
            />
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-7">
          {following.map((follow) => (
            <FollowingCard key={follow.id} follow={follow} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Following;
