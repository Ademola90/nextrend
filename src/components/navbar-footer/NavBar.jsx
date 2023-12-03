import React from "react";
import { useState } from "react";
import { FaHamburger, FaShoppingCart } from "react-icons/fa";
import { GrServices } from "react-icons/gr";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };
  return (
    <nav className="fixed  top-[-3px] left-0 right-0 z-20 bg-white py-5 text-[#906044]  px-8 h-20 md:px-10 lg:px-16 flex items-center justify-between">
      <div>
        <p className=" text-[44px]  font-bold">NexTrend</p>
      </div>
      <div className="hidden md:flex space-x-10">
        <Link
          to="/"
          className=" cursor-pointer no-underline transition-transform hover:scale-110 duration-300 ease-in"
        >
          Home
        </Link>
        <button className=" cursor-pointer flex items-center gap-3 justify-center no-underline transition-transform hover:scale-110 duration-300 ease-in">
          <GrServices />
          <p> Service</p>
        </button>
        <button className=" cursor-pointer flex items-center gap-3 justify-center no-underline transition-transform hover:scale-110 duration-300 ease-in">
          <FaShoppingCart className=" text-black" />
          <p>Cart</p>
        </button>
      </div>
      <div className=" flex items-center gap-5">
        <button className=" border-[#906044] border-2 rounded-3xl lg:block md:block hidden text-[#906044] px-4 py-2 cursor-pointer no-underline transition-transform hover:scale-110 duration-300 ease-in">
          Sign Up
        </button>
        <button className="px-10 py-2 lg:block md:block hidden rounded-3xl bg-[#906044] text-white no-underline transition-transform hover:scale-110 duration-300 ease-in">
          Login
        </button>
      </div>
      <div className="md:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className=" focus:outline-none "
        >
          <FaHamburger />
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white p-4 space-y-8">
          <button
            onClick={closeMenu}
            className=" block cursor-pointer no-underline transition-transform hover:scale-110 duration-300 ease-in"
          >
            Home
          </button>
          <button
            onClick={closeMenu}
            className=" block cursor-pointer no-underline transition-transform hover:scale-110 duration-300 ease-in"
          >
            About
          </button>
          <button
            onClick={closeMenu}
            className=" border-[#906044] border-2 rounded-3xl text-[#906044] w-full py-2 block cursor-pointer no-underline transition-transform hover:scale-110 duration-300 ease-in"
          >
            Sign Up
          </button>
          <button
            onClick={closeMenu}
            className="w-full py-2 lg:hidden grid justify-center font-bold md:hidden cursor-pointer rounded-3xl bg-[#906044] text-white no-underline transition-transform hover:scale-110 duration-300 ease-in"
          >
            Login
          </button>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
