import React from "react";
import { FaHome, FaMapMarkerAlt, FaImages, FaVideo, FaSearch, FaUser, FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import { useAuth } from "../Auth/AuthContext";
import { Link } from "react-router-dom";

const NavBar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-transprent text-white px-6 py-2">
      <div className="container mx-auto flex items-center justify-between">
        {/* Left Section */}
        <div className="flex space-x-10">
          <button className="flex items-centern text-lg space-x-2 hover:text-orange-300">
            <FaHome className=" text-2xl"/>
            <span>Home</span>
          </button>
          <button className="flex items-center space-x-2 hover:text-orange-300">
            <FaMapMarkerAlt className=" text-2xl" />
            <span>Location</span>
          </button>
          <button className="flex items-center space-x-2 hover:text-orange-300">
            <FaImages className=" text-2xl"/>
            <span>Gallery</span>
          </button>
          <button className="flex items-center space-x-2 hover:text-orange-300">
            <FaVideo className=" text-2xl"/>
            <span>Videos</span>
          </button>
        </div>

        {/* Center Section - Search Bar */}
        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="Search..."
            className="w-full bg-gray-700 text-white rounded-full py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <FaSearch className="absolute top-2.5 left-3 text-orange-400" />
        </div>  

        {/* Right Section */}
        <div className="flex space-x-4">
          {user ? (
            <>
              <button className="flex items-center space-x-2 hover:text-orange-300">
                <FaUser className=" text-2xl"/>
                <span>{user.name}</span>
              </button>
              <button
                onClick={logout}
                className="flex items-center space-x-2 hover:text-orange-300"
              >
                <FaSignOutAlt className=" text-2xl"/>
                <span>Logout</span>
              </button>
            </>
          ) : (
            <Link  to="/login">
            <button className="flex items-center space-x-2 hover:text-orange-300">
              <FaSignInAlt className=" text-2xl"/>
              <span>Login</span>
            </button>
            </Link>
            
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
