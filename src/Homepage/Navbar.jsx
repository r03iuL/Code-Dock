import { Link } from "react-router-dom";

const Navbar = () => {

    const navbarStart =
        <div className="grid lg:flex lg:gap-5">
            <Link to='/'>Features</Link>
            <Link to='/'>Blog</Link>
            <Link to='/blog'>About Us</Link>
        </div>

    const navbarEnd =
        <div className="grid lg:flex lg:gap-5">
            <div className="form-control">
                <input type="text" placeholder="Search" className="input bg-white input-bordered w-24 md:w-auto" />
            </div>
            <Link>Code Editor</Link>
            <Link>Sign Up</Link>
        </div>

    return (
        <div className="navbar bg-slate-100 text-black">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-100 rounded-box w-52 gap-5 my-autos">
                        {
                            navbarStart
                        }
                        {
                            navbarEnd
                        }
                    </ul>
                </div>
                <div>
                    <h2 className='font-bold text-2xl ms-7'>Logo</h2>
                </div>
            </div>
            <div className="navbar hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-5">
                    <div className="flex justify-evenly">
                        <div className="navbar-start mr-40">
                            {
                                navbarStart
                            }
                        </div>
                        <div className="navbar-end">
                            {
                                navbarEnd
                            }
                        </div>
                    </div>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;