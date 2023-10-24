import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {
                console.log("logout successfully");
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const navLinks = (
        <>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>

            {user && (
                <>
                    <li>
                        <NavLink to="/addProduct">Add Product</NavLink>
                    </li>
                    <li>
                        <NavLink to="/myCart">My Cart</NavLink>
                    </li>
                </>
            )}
        </>
    );

    return (
        <div className="navbar bg-base-100 w-4/5 mx-auto">
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
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        {navLinks}
                    </ul>
                </div>
                <a className="text-3xl font-bold cursor-pointer" href="/">
                    MOT<span className="text-[#EF1D26]">E</span>X
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">{navLinks}</ul>
            </div>
            <div className="navbar-end ">
                {user ? (
                    <>
                        <span>{user.email}</span>
                        <button onClick={handleLogOut} className="btn">
                            LogOut
                        </button>
                    </>
                ) : (
                    <button className="btn">
                        <Link to="/login">Login</Link>
                    </button>
                )}
            </div>
        </div>
    );
};

export default Header;
