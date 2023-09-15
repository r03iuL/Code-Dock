import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { BsMoonStarsFill, BsSunFill } from "react-icons/bs";

const Navbar = ({ darkMode, setDarkMode }) => {

  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .catch((error) => console.log(error));
  };


  const navbarStart = (
    <ul className="lg:flex gap-8 text-xl font-semibold ">
      {/* <li>
        <Link to="/">Features</Link>
      </li>
      <li>
        <Link>Code Editor</Link>
      </li> */}
      <li>
        <Link to="/allblog">Blog</Link>
      </li>
      <li>
        <Link to="/about">About Us</Link>
      </li>
      <li>
        {
          user && <Link to="/user/dashboard">Dashboard</Link>
        }

      </li>
    </ul>
  );

  const navbarEnd = (
    <div className="grid lg:flex lg:gap-5 items-center text-lg font-semibold">
      <div className=" flex  gap-2 switch-container">
          <label className="switch">
            <input type="checkbox" className="toggle" onChange={() => setDarkMode(!darkMode)} />
            <span className="slider round" />
          </label>
          <label className="">{darkMode ? <BsMoonStarsFill/> : <BsSunFill/>}</label>

        </div>
      <div className=" flex form-control ">
        
        
        <input
          type="text"
          placeholder="Search"
          className="input bg-white border-2 border-violet-600 input-bordered w-24 md:w-auto"
        />
        
      </div>

      {user ? (
        <>
          {/* <span>{user.displayName}</span>           */}

          <button onClick={handleLogOut} className="btn btn-ghost border-violet-600">
            LogOut
          </button>
          <span><img className="rounded-full w-[70px] border-2 border-violet-600" src={user.photoURL} alt="User Avatar" /></span>
        </>
      ) : (
        <>
          <Link to="/login">Login</Link>
        </>
      )}
    </div>
  );

  return (

    <div className={`container mx-auto navbar flex justify-between items-center px-5 border-b-4 border-violet-600 ${darkMode ? "bg-black text-white" : "bg-white text-black"}`}>
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-200 rounded-box w-52 gap-5 my-auto z-10"
          >
            {navbarStart}
            {navbarEnd}
          </ul>
        </div>
        <div>

          <Link to='/'>
            <h2 className="font-bold font-mono text-3xl">
              C0de<span>_&gt;</span>d0ck
            </h2>
          </Link>
          {/* <div className="switch-container">
              <label className="switch">
                <input type="checkbox" className="toggle" />
                <span className="slider round" />
              </label>
              <label className="switch-label"></label>
            </div> */}





        </div>
      </div>
      <div className="navbar p-0 hidden lg:flex justify-between items-center">
        <div className="navbar-start">{navbarStart}</div>
        <div className="navbar-end">{navbarEnd}</div>
      </div>
    </div>
  );
};

export default Navbar;
