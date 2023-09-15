/* eslint-disable no-unused-vars */
import { useState } from "react";
import { FaFolder, FaRegHeart } from "react-icons/fa";
import { ImFolderDownload } from "react-icons/im";
import { Link } from "react-router-dom";

const RepositoryCard = ({ repo, fileUrls }) => {
  const [clicked, setClicked, setCountFile] = useState(false);
  // setCountFile(repo?.fileUrlList?.length)
  const abc = repo?.fileUrlList?.map((a) => a);
  // console.log(fileUrls);

  const getFileData = (id) => {
    setClicked(true);
    // console.log(id);
  };

  return (
    <div className="flex flex-col lg:flex-row justify-between items-center px-[4%] py-4 my-3 border-b-2 border-violet-600 ">
      {/* <div className="h-[1px] w-full  bg-purple-700"></div> */}

      <div className="flex flex-col lg:flex-row items-left gap-6 ">
        <div onClick={() => getFileData(repo._id)} className="">
          <Link to={`/user/repoFolder/${repo?._id}`}>
            <FaFolder className="text-4xl text-purple-500"></FaFolder>
          </Link>
        </div>

        <div className="w-60">
          <p className="text-gray-600 font-semibold text-xl">
            {repo?.repoName}
          </p>
          <p className="text-gray-500 text-sm">{repo?.displayName}</p>
          <p className="text-gray-500 text-sm">{repo?.creationDate}</p>
        </div>
        <div className="flex flex-col gap-3">
          <p className="bg-violet-500 text-white text-center rounded-md px-3 py-1 text-base">
            {repo?.repoStatus}
          </p>
          <p className="bg-violet-500 text-white text-center rounded-md px-3 py-1 text-base">
            {repo?.repoType}
          </p>
        </div>
        {/* <div className="bg-violet-500 text-white text-center rounded-md px-3 py-1 text-base ">
          {types}
        </div> */}
      </div>
      <div className="mt-5 lg:mt-auto">
        <p>
          <FaRegHeart className="text-2xl mx-auto text-purple-500 cursor-pointer"></FaRegHeart>{" "}
        </p>

        {/* ratings of this repository  */}
        <p className="text-gray-500 text-base text-center">{repo?.rating}</p>

        {/* total reviews will be here  */}
        <p className="text-gray-500 text-base">
          {repo?.numberOfRatings} reviews
        </p>
      </div>
    </div>
  );
};

export default RepositoryCard;
