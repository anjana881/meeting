import React from "react";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar   text-black bg-zinc-300  flex justify-center p-3">
        <ul className="flex items-center justify-start content-center">
          <Link to="/">
            <li className="text-2xl font-bold p-3 mr-20 hover:text-slate-500 cursor-pointer underline">
              Set Meeting
            </li>
          </Link>
          <Link to="menu">
            <li className="text-2xl  font-bold p-3  hover:text-slate-500 cursor-pointer underline">
              Menus
            </li>
          </Link>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
