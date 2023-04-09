import React from "react";
import logo from "../assets/logo.png";
import { BsFillMoonFill, BsSun, BsSunFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";

const Navbar = () => {
  const { isDark, toggleDark } = useGlobalContext();
  return (
    <nav
      className={isDark ? "w-full bg-[#333] text-white h-[100px]" : "bg-[#eee]"}
    >
      <div className="flex items-center justify-between max-w-[1300px] mx-auto px-5">
        <div>
          <img src={logo} className="max-w-[100px]" alt="logo" />
        </div>
        <ul className="flex gap-4 items-center">
          <Link className="text-xl font-bold" to="/">
            Home
          </Link>
          <Link className="text-xl font-bold" to="/favorites">
            Favorites
          </Link>
          <div className="flex gap-3" onClick={toggleDark}>
            {isDark ? (
              <BsSun size={25} cursor="pointer"></BsSun>
            ) : (
              <BsFillMoonFill size={25} cursor="pointer"></BsFillMoonFill>
            )}
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
