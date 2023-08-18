import { FaFolder, FaRegHeart } from "react-icons/fa";

const RepoCard = ({repo}) => {

    const {
        repoName,
        authorName,
        creationDate,
        status,
        rating,
        numberOfRatings,
        types,
    }= repo;

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
                  <FaRegHeart className="text-4xl mx-auto text-purple-700"></FaRegHeart>{" "}
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

export default RepoCard;
