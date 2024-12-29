import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../Context/UserContextProvider";

const Navbar = ({ searchQuery, setSearchQuery }) => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    navigate("/", { state: { searchQuery } });
  };

  return (
    <div className="bg-slate-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <div className="text-2xl font-bold cursor-pointer">
              🛒 SmartMart
            </div>
          </div>

          {/* Hamburger Menu for Mobile */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex items-center flex-grow mx-4">
            <form className="w-full" onSubmit={handleSearchSubmit}>
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full max-w-md px-4 py-2 rounded-md focus:outline-none focus:ring focus:ring-slate-300 text-black"
              />
            </form>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center space-x-6">
            <NavLink to="/" className="hover:text-gray-200">
              Home
            </NavLink>
            <NavLink to="/cart" className="hover:text-gray-200">
              Cart
            </NavLink>
            <NavLink to="/profile" className="hover:text-gray-200">
              Profile
            </NavLink>
            <NavLink to="/register" className="ml-4 text-sm font-medium">
              Hi, {user?.username || "Guest"}!
            </NavLink>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-slate-700">
          <div className="px-4 py-2 space-y-2">
            <NavLink
              to="/"
              className="block text-white hover:bg-slate-600 px-2 py-1 rounded"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/cart"
              className="block text-white hover:bg-slate-600 px-2 py-1 rounded"
              onClick={() => setMenuOpen(false)}
            >
              Cart
            </NavLink>
            <NavLink
              to="/profile"
              className="block text-white hover:bg-slate-600 px-2 py-1 rounded"
              onClick={() => setMenuOpen(false)}
            >
              Profile
            </NavLink>
            <NavLink
              to="/register"
              className="block text-white hover:bg-slate-600 px-2 py-1 rounded"
              onClick={() => setMenuOpen(false)}
            >
              Hi, {user?.username || "Guest"}!
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
