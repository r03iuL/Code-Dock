import { FaSearch } from "react-icons/fa";

const DashBoard = () => {
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
            <button className="text-xl font-semibold py-3 px-8 text-blue-700 text bg-gray-300">
              Store
            </button>
          </div>
        </div>
        {/* The dashboard section start here  */}
        <div className="text-3xl font-bold text-center px-24 py-10 border-t-4 border-violet-700 ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 justify-between  mb-10 ">
            <div className=" bg-violet-100 rounded-lg py-14 border-2 border-violet-700">
              <h1>Total repositories</h1>
              <h1>145</h1>
            </div>

            <div className=" bg-violet-100 rounded-lg py-14 border-2 border-violet-700">
              <h1>Member Since </h1>
              <h1>01/01/2020</h1>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 justify-between ">
            <div className=" bg-violet-100 rounded-lg py-14 border-2 border-violet-700">
              <h1>Total Contreibution</h1>
              <h1>45</h1>
            </div>

            <div className=" bg-violet-100 rounded-lg py-14 border-2 border-violet-700">
              <h1>This Month </h1>
              <h1>25</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
