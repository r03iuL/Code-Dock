import { Outlet } from "react-router-dom";
import Navbar from "../Homepage/Navbar";

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;