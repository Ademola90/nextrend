import React from "react";
import { useState } from "react";
import { FaHamburger, FaShoppingCart } from "react-icons/fa";
import { GrServices } from "react-icons/gr";
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
  let navigate = useNavigate();

  const handleLogout = () => {
    // Perform logout logic here
    // For example, clear the token from sessionStorage
    sessionStorage.removeItem("token");

    // To navgate to Homepage after logout
    navigate("/signin");
  };

  const [menuOpen, setMenuOpen] = useState(false);
  const [accountMenuOpen, setAccountMenuOpen] = useState(false);

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
      {/* <div className=" flex items-center gap-5">
        <Link
          to="/signup"
          className=" border-[#906044] border-2 rounded-3xl lg:block md:block hidden text-[#906044] px-4 py-2 cursor-pointer no-underline transition-transform hover:scale-110 duration-300 ease-in"
        >
          Sign Up
        </Link>
        <Link
          to="/signin"
          className="px-10 py-2 lg:block md:block hidden rounded-3xl bg-[#906044] text-white no-underline transition-transform hover:scale-110 duration-300 ease-in"
        >
          Login
        </Link>
      </div> */}

      <div className=" items-center gap-5 lg:block md:block hidden">
        {/* ... other navigation links */}
        <div className="relative inline-block text-left">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            type="button"
            className="cursor-pointer focus:outline-none"
          >
            Account
          </button>
          {menuOpen && (
            <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div
                className="py-1"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
              >
                {/* <Link
                  to="/profile"
                  onClick={closeMenu}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  role="menuitem"
                >
                  Profile
                </Link> */}
                {/* Signup and Signin */}

                <div className=" grid items-center gap-5">
                  <Link
                    to="/signup"
                    className=" border-[#906044] border-2 rounded-3xl lg:block md:block hidden text-[#906044] px-4 py-2 cursor-pointer no-underline transition-transform hover:scale-110 duration-300 ease-in"
                  >
                    Sign Up
                  </Link>
                  <Link
                    to="/signin"
                    className="px-10 py-2 lg:block md:block hidden rounded-3xl bg-[#906044] text-white no-underline transition-transform hover:scale-110 duration-300 ease-in"
                  >
                    Login
                  </Link>
                </div>

                <button
                  onClick={handleLogout}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                  role="menuitem"
                >
                  Logout
                </button>
              </div>
            </div>
          )}
        </div>
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
          <Link
            to="/"
            onClick={closeMenu}
            className=" block cursor-pointer no-underline transition-transform hover:scale-110 duration-300 ease-in"
          >
            Home
          </Link>
          <button
            onClick={closeMenu}
            className=" block cursor-pointer no-underline transition-transform hover:scale-110 duration-300 ease-in"
          >
            About
          </button>
          {/* <Link
            to="/signup"
            onClick={closeMenu}
            className=" border-[#906044] border-2 rounded-3xl text-[#906044] w-full py-2 block cursor-pointer no-underline transition-transform hover:scale-110 duration-300 ease-in"
          >
            Sign Up
          </Link>
          <Link
            to="/signin"
            onClick={closeMenu}
            className="w-full py-2 lg:hidden grid justify-center font-bold md:hidden cursor-pointer rounded-3xl bg-[#906044] text-white no-underline transition-transform hover:scale-110 duration-300 ease-in"
          >
            Login
          </Link> */}

          {/* My account button */}

          <div className="flex items-center gap-5">
            {/* ... other navigation links */}
            <div className="relative inline-block text-left">
              <button
                onClick={() => setAccountMenuOpen(!accountMenuOpen)}
                type="button"
                className="cursor-pointer focus:outline-none"
              >
                Account
              </button>
              {accountMenuOpen && (
                <div className="w-full mt-4 rounded-md shadow-lg bg-white">
                  <div
                    className="py-1 z-40"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                  >
                    <Link
                      to="/signup"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 no-underline"
                      onClick={() => setAccountMenuOpen(false)}
                    >
                      Sign Up
                    </Link>
                    <Link
                      to="/signin"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 no-underline"
                      onClick={() => setAccountMenuOpen(false)}
                    >
                      Login
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left no-underline"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
