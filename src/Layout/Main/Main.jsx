import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Footer from "../../Homepage/Footer";
import Navbar from "../../Homepage/Navbar";
import useAuth from "../../Hooks/useAuth/useAuth";
import { useState } from "react";

const Main = () => {
  // if user exists then navigate to use dashboard page
  const [darkMode, setDarkMode] = useState(false);

  const { user } = useAuth();

  const navigate = useNavigate();
  if (user) {
    navigate("/user/dashboard");
  }


  const location = useLocation();
  //   console.log(location);
  const noHeaderFooter =
    location.pathname.includes("login") || location.pathname.includes("signup");
  return (
    <div>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode}></Navbar>
      <div className={`${darkMode? "bg-violet text-white" : "bg-white text-black"}`}>
        <Outlet darkMode={darkMode} setDarkMode={setDarkMode}></Outlet>
        {noHeaderFooter || <Footer ></Footer>}
        
      </div>
      
    </div>
  );
};

export default Main;
