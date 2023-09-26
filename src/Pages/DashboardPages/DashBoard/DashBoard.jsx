import { RiGitRepositoryLine } from "react-icons/ri";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useRepo from "../../../Hooks/useRepo/useRepo";
import RepositoryCard from "../../../Shared/RepositoryCard/RepositoryCard";
import { useState } from "react";

const DashBoard = () => {
  //getting data by using hook but it will work when it will be dynamic.
  const [darkMode, setDarkMode] = useState(false);
  const [allRepositories] = useRepo();
  // console.log(allRepositories.length);

  //TODO=> it is for temporary it will be removed
  const slicedRepo = allRepositories.slice(0, 3);
  // console.log(slicedRepo.length);

  return (
    <div className={`px-[4%] py-[3%] w-full ${darkMode ? "bg-violet  text-white" : "bg-white text-black"}`}>
      {/* dashboard details  */}
      <div className="flex">
        <div className="box-style">
          <p className="flex items-center justify-between mb-4">
            {/* user repositories number */}
            <span className="font-semibold text-xl">{allRepositories.length}</span>
            <span className="bg-violet-200 rounded-md p-2 text-2xl">
              <RiGitRepositoryLine ></RiGitRepositoryLine>
            </span>
          </p>
          <p className="text-gray-500 text-lg">Total Repositories</p>
        </div>
      </div>

      {/* recent in dashboard section  */}
      <div className="box-style my-[3%]">
        <SectionTitle heading="Recent Activities"></SectionTitle>
        <div className="mt-[3%]">
          {slicedRepo.map((repo) => (
            <RepositoryCard key={repo.id} repo={repo}></RepositoryCard>
          ))}
        </div>
      </div>

      {/* favourites in dashboard  */}
      <div className="box-style my-[3%]">
        <SectionTitle heading="Favourites"></SectionTitle>
        <div className="mt-[3%]">
          {slicedRepo.map((repo) => (
            <RepositoryCard darkMode={darkMode} setDarkMode={setDarkMode} key={repo.id} repo={repo}></RepositoryCard>
          ))}
        </div>
      </div>

      {/* projects in dashboard  */}
      <div className="box-style my-[3%]">
        <SectionTitle heading="Projects"></SectionTitle>
        <div className="mt-[3%]">
          {slicedRepo.map((repo) => (
            <RepositoryCard key={repo.id} repo={repo}></RepositoryCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
