import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Footer from "../../Homepage/Footer";
import Navbar from "../../Homepage/Navbar";
import useAuth from "../../Hooks/useAuth/useAuth";

const Main = () => {
  // if user exists then navigate to use dashboard page
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
      <Navbar></Navbar>
      <Outlet></Outlet>
      {noHeaderFooter || <Footer></Footer>}
    </div>
  );
};

export default Main;
