import React from "react";
import { Link } from "react-router-dom";
import { BiSolidDashboard, BiSolidTimer, BiLogOutCircle, BiBookHeart } from "react-icons/bi";
import { PiChatTextBold } from "react-icons/pi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { RiGitRepositoryLine, RiGitPullRequestFill } from "react-icons/ri";
import { AiFillProject } from "react-icons/ai";
import { MdOutlineFavorite } from "react-icons/md";
import { SlUserFollowing } from "react-icons/sl";
import { HiOutlineTrendingUp } from "react-icons/hi";
import useAuth from "../../Hooks/useAuth/useAuth";
import "./DashboardSidebar.css";
import ActiveDashboardLink from "../../Components/ActiveDashboardLink/ActiveDashboardLink";
import { BsMoonStarsFill, BsSunFill } from "react-icons/bs";
import { FaUserCheck } from "react-icons/fa";
import useAdmin from "../../Hooks/useAdmin";


const DashboardSidebar = ({ setDarkMode, darkMode,  }) => {
  const { user, logOut } = useAuth();
  // console.log(user?.photoURL);

  //beacuse at first loading here user is null...
  if (user === null) {
    // Handle loading state, possibly showing a loading spinner or placeholder
    return (
      <p className="text-center text-2xl font-extrabold text-violet-400">
        Loading...
      </p>

    );
  }

  // function for log out the existing user
  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };

  
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isAdmin] = useAdmin();

  return (
    <div className={`py-[5%] ${darkMode ? "bg-violet  text-white" : "bg-white text-black"}`}>
      {/* logo  */}
      <div className="logo">
        <p className="italic  text-3xl text-center fost">
          <Link to="/">
            Code<span className="text-violet-600">Dock</span>
          </Link>
        </p>
      </div>

      {/* image and icon under the image  */}
      <div className="py-[10%] text-center">
        <Link to="/user/userprofile">
          <img
            src={user?.photoURL}
            alt={user?.displayName}
            className="mx-auto rounded-[50%] border-4 border-violet-400 w-[100px]"
          />
        </Link>

        {/* user name  */}
        <Link to="/user/userprofile"><p className="text-gray-500 text-lg font-semibold my-[2%]">
          {user.displayName}
        </p></Link>

        {/* user options  */}
        <div className="flex justify-center text-xl gap-x-5">
          <div className=" flex  gap-2 switch-container">
            <label className="switch">
              <input type="checkbox" className="toggle" onChange={() => setDarkMode(!darkMode)} />
              <span className="slider round" />
            </label>
            <label className="">{darkMode ? <BsMoonStarsFill /> : <BsSunFill />}</label>

          </div>
          <p title="messages">
            <Link to="/user/chat">
              <PiChatTextBold></PiChatTextBold>
            </Link>
          </p>

          <p title="notifications">
            <Link to="/user/notifications">
              <IoMdNotificationsOutline></IoMdNotificationsOutline>
            </Link>
          </p>
          <p title="pull requests">
            <Link to="/user/pullrequests">
              <RiGitPullRequestFill></RiGitPullRequestFill>
            </Link>
          </p>
        </div>
      </div>

      {/* navbar options  */}
      <div className="mt-3">
        <ul>

          {
            isAdmin ? <>

              {/* -------- admin dashboard--------------- */}
              <li className="  ">
                <ActiveDashboardLink to="/user/admindashboard">
                  <div className="">
                    <BiSolidTimer></BiSolidTimer>
                  </div>
                  <div className="">Admin Dashboard</div>
                </ActiveDashboardLink>
              </li>

              <li className="  ">
                <ActiveDashboardLink to="/user/manage-users">
                  <div className="">
                  <FaUserCheck></FaUserCheck>
                  </div>
                  <div className="">Manage Users</div>
                </ActiveDashboardLink>
              </li>

              <li className="  ">
                <ActiveDashboardLink to="/user/recent">
                  <div className="">
                    <BiSolidTimer></BiSolidTimer>
                  </div>
                  <div className="">recent Activities</div>
                </ActiveDashboardLink>
              </li>
              <li className="  ">
                <ActiveDashboardLink to="/user/repositories">
                  <div className="">
                    <RiGitRepositoryLine></RiGitRepositoryLine>
                  </div>
                  <div className="">Repositories</div>
                </ActiveDashboardLink>
              </li>
              <li className="  ">
                <ActiveDashboardLink to="/user/projects">
                  <div className="">
                    <AiFillProject></AiFillProject>
                  </div>
                  <div className="">Projects</div>
                </ActiveDashboardLink>
              </li>
              <li className="  ">
                <ActiveDashboardLink to="/user/favourites">
                  <div className="">
                    <MdOutlineFavorite></MdOutlineFavorite>
                  </div>
                  <div className="">Favoutites</div>
                </ActiveDashboardLink>
              </li>
              <li className="  ">
                <ActiveDashboardLink to="/user/following">
                  <div className="">
                    <SlUserFollowing></SlUserFollowing>
                  </div>
                  <div className="">Following</div>
                </ActiveDashboardLink>
              </li>
              <li className="  ">
                <ActiveDashboardLink to="/user/trending">
                  <div className="">
                    <HiOutlineTrendingUp></HiOutlineTrendingUp>
                  </div>
                  <div className="">Trending</div>
                </ActiveDashboardLink>
              </li>
              <li className="  ">
                <ActiveDashboardLink to="/user/allblog">
                  <div className="">
                    <BiBookHeart></BiBookHeart>
                  </div>
                  <Link to='/user/allblog' className="text-gray-500 hover:text-violet-600">All Blogs</Link>
                </ActiveDashboardLink>
              </li>
              <li className="  " onClick={handleLogOut}>
                <ActiveDashboardLink to="/">
                  <div className="">
                    <BiLogOutCircle></BiLogOutCircle>
                  </div>
                  <div className="">Log out</div>
                </ActiveDashboardLink>
              </li>
            </> : <>

              <li className=" rounded-none ">
                <ActiveDashboardLink to="/user/dashboard">
                  <div className="">
                    <BiSolidDashboard></BiSolidDashboard>
                  </div>
                  <div className="">Dashboard</div>
                </ActiveDashboardLink>
              </li>

              <li className="  ">
                <ActiveDashboardLink to="/user/recent">
                  <div className="">
                    <BiSolidTimer></BiSolidTimer>
                  </div>
                  <div className="">recent Activities</div>
                </ActiveDashboardLink>
              </li>
              <li className="  ">
                <ActiveDashboardLink to="/user/repositories">
                  <div className="">
                    <RiGitRepositoryLine></RiGitRepositoryLine>
                  </div>
                  <div className="">Repositories</div>
                </ActiveDashboardLink>
              </li>
              <li className="  ">
                <ActiveDashboardLink to="/user/projects">
                  <div className="">
                    <AiFillProject></AiFillProject>
                  </div>
                  <div className="">Projects</div>
                </ActiveDashboardLink>
              </li>
              <li className="  ">
                <ActiveDashboardLink to="/user/favourites">
                  <div className="">
                    <MdOutlineFavorite></MdOutlineFavorite>
                  </div>
                  <div className="">Favoutites</div>
                </ActiveDashboardLink>
              </li>
              <li className="  ">
                <ActiveDashboardLink to="/user/following">
                  <div className="">
                    <SlUserFollowing></SlUserFollowing>
                  </div>
                  <div className="">Following</div>
                </ActiveDashboardLink>
              </li>
              <li className="  ">
                <ActiveDashboardLink to="/user/trending">
                  <div className="">
                    <HiOutlineTrendingUp></HiOutlineTrendingUp>
                  </div>
                  <div className="">Trending</div>
                </ActiveDashboardLink>
              </li>
              <li className="  ">
                <ActiveDashboardLink to="/user/allblog">
                  <div className="">
                    <BiBookHeart></BiBookHeart>
                  </div>
                  <Link to='/user/allblog' className="text-gray-500 hover:text-violet-600">All Blogs</Link>
                </ActiveDashboardLink>
              </li>
              <li className="  " onClick={handleLogOut}>
                <ActiveDashboardLink to="/">
                  <div className="">
                    <BiLogOutCircle></BiLogOutCircle>
                  </div>
                  <div className="">Log out</div>
                </ActiveDashboardLink>
              </li>

            </>
          }



        </ul>
      </div>
    </div>
  );
};

export default DashboardSidebar;
