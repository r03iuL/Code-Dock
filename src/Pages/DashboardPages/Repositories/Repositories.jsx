import useRepo from "../../../Hooks/useRepo/useRepo";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import RepositoryCard from "../../../Shared/RepositoryCard/RepositoryCard";
import { BiSearchAlt2 } from "react-icons/bi";

const Repositories = () => {
  //getting data by using hook but it will work when it will be dynamic.
  const [allRepositories] = useRepo();
  // console.log(allRepositories.length);

  //it is for temporary it will be removed
  const slicedRepo = allRepositories.slice(0, 3);
  console.log(slicedRepo.length);

  return (
    <div className="px-[4%] py-[3%]">
      <div className="flex justify-between box-style  items-center mb-8 ">
        <div className="relative w-1/3   rounded ">
          <div className="absolute top-[16px] left-2">
            <BiSearchAlt2 className="text-xl"></BiSearchAlt2>
          </div>

          {/* input field  */}
          <input
            type="text"
            placeholder="Search"
            className=" bg-violet-50 w-full rounded-sm  pl-8 h-12 focus:outline-none "
          />

          {/* search button  */}
          <div className="absolute right-[8px] top-[6px]">
            <button className="bg-violet-500 text-white font-semibold text-base  text-center  rounded-sm   px-5 py-[6px] hover:bg-violet-700">
              Search
            </button>
          </div>
        </div>

        {/* TODO => this will be changed and it will be dropdown menu  */}
        <div className="flex gap-7">
          <button className="text-base  py-[6px] px-6  rounded-[4px] cursor-pointer bg-violet-500 text-white">
            Type
          </button>
          <button className="text-base  py-[6px] px-6  rounded-[4px] cursor-pointer text bg-violet-500 text-white ">
            Sort
          </button>
        </div>
      </div>

      <div className="box-style my-[3%]">
        <SectionTitle heading="All Repositories"></SectionTitle>
        <div className="mt-[3%]">
          {slicedRepo.map((repo) => (
            <RepositoryCard key={repo.id} repo={repo}></RepositoryCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Repositories;
