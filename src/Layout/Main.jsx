import { Outlet } from "react-router-dom";
import Footer from './../Homepage/Footer';
import Navbar from "../Homepage/Navbar";

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;