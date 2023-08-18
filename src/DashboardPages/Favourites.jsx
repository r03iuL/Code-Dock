import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import Favcard from "./favcard";


const Favourites = () => {
  const [favs, setFavs] = useState([]);

  useEffect(() => {
    fetch("../../public/favourite.json")
      .then((res) => res.json())
      .then((data) => setFavs(data));
  }, []);
  console.log(favs);
  return (
    <div className="p-5">
      <div className="bg-white py-6  px-8">
        <div className="flex justify-between items-center mb-8">
          <div className="relative">
            <FaSearch className="absolute left-3 bottom-4 text-xl"></FaSearch>

            <input
              className="bg-gray-200 text-xl py-3 pl-10 pr-3 outline-none"
              placeholder="Search"
              type="text"
            />
          </div>
          <div className="flex gap-7">
            <button className="text-xl font-semibold py-3 px-8 cursor-pointer bg-gray-300">
              Type
            </button>
            <button className="text-xl font-semibold py-3 px-8 text-blue-700 text bg-gray-300 ">
              Store
            </button>
          </div>
        </div>

        {favs.map((fav) => (
          <Favcard key={fav.id} fav={fav}></Favcard>
        ))}
      </div>
    </div>
  );
};

export default Favourites;
