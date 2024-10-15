import logo from "/assets/images/logo.svg";
import hamburgerMenu from "/assets/images/icons8-hamburger-menu.svg";
import userPFP from "/assets/images/user.svg";
import home from "/assets/images/home.svg";
import login from "/assets/images/login.svg";
import restaurant from "/assets/images/restaurant.svg";
import weight from "/assets/images/weight.svg";
import person from "/assets/images/person.svg";
import settings from "/assets/images/settings.svg";
import logout from "/assets/images/logout.svg";
import signup from "/assets/images/signup.svg";
import { useState } from "react";
import { useAuth } from "../contexts/AuthProvider";
import { useNavigate } from "react-router-dom";

import { auth } from "../firebase/firebase";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { user, loading, setloading } = useAuth();
  const navigate = useNavigate();

  // Function to handle hamburger click
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLogout = async () => {
    try {
      await auth.signOut();
      setloading(false);
      navigate("/");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <nav>
      <div className="container mx-auto flex justify-between items-center px-4 py-2">
        {/* Left Side with Logo and Links */}
        <div className="flex items-center space-x-6">
          <img src={logo} alt="FitScale Logo" className="h-8 w-8 mr-2" />
          <ul className="hidden md:flex space-x-6 text-black">
            <li>
              <a href="/bmi-calculator/">Home</a>
            </li>
            <li>
              <a href="/bmi-calculator/BMI">BMI</a>
            </li>
            <li>
              <a href="/bmi-calculator/Meals">Meals</a>
            </li>
          </ul>
        </div>

        {/* Hamburger Menu Icon */}
        <div className="cursor-pointer md:hidden" onClick={toggleMenu}>
          <img src={hamburgerMenu} alt="Hamburger Menu" className="h-6 w-6" />
        </div>

        {/* Right Side with Log In and Sign Up/ or Sign out and PFP */}
        {user ? (
          <div className="hidden md:flex relative">
            {/* Profile picture button */}
            <button onClick={toggleDropdown} className="relative">
              <img
                src={user.photoURL || userPFP}
                alt="Profile"
                className="w-10 h-10 rounded-full object-cover"
              />
            </button>

            {/* Dropdown Menu */}
            {dropdownOpen && (
              <div className="z-10 absolute right-0 top-12 mt-2 w-36 bg-zinc-100 text-black rounded-md shadow-lg">
                <a
                  href="/bmi-calculator/myProfile"
                  className="flex items-center  px-4 py-2 text-sm  hover:bg-zinc-300"
                >
                  <img src={person} className="pr-2" />
                  Profile
                </a>
                <a
                  href="/settings"
                  className="flex items-center  px-4 py-2 text-sm hover:bg-zinc-300"
                >
                  <img src={settings} className="pr-2" />
                  Settings
                </a>
                <button
                  className="flex  items-center r w-full text-left px-4 py-2 text-sm hover:bg-zinc-300 text-red-500"
                  onClick={handleLogout}
                >
                  <img src={logout} className="pr-2" />
                  Sign out
                </button>
              </div>
            )}
          </div>
        ) : loading ? (
          <div className="w-10 h-10 rounded-full bg-gray-300 animate-pulse"></div>
        ) : (
          <div className="hidden md:flex space-x-4 font-medium">
            <a
              href="/bmi-calculator/Login"
              className="bg-sky-500 text-white px-6 py-2 rounded-2xl hover:bg-sky-600"
            >
              Log In
            </a>
            <a
              href="/bmi-calculator/Signup"
              className="text-sky-500 px-6 py-2 hover:text-sky-900"
            >
              Sign Up
            </a>
          </div>
        )}
      </div>

      {/* Mobile Navigation Links */}
      <ul
        className={`${
          isOpen ? "block" : "hidden"
        } bg-zinc-100 space-y-4 p-4 md:hidden text-black`}
      >
        <li>
          <a href="/bmi-calculator/" className="flex items-center">
            <img src={home} className="mr-2" />
            Home
          </a>
        </li>
        <li>
          <a href="/bmi-calculator/BMI" className="flex">
            <img src={weight} className="mr-2" />
            BMI
          </a>
        </li>
        <li>
          <a href="/bmi-calculator/Meals" className="flex">
            <img src={restaurant} className="mr-2" />
            Meals
          </a>
        </li>
        <li>
          <a href="/bmi-calculator/Login" className="flex">
            <img src={login} className="mr-2" />
            Log In
          </a>
        </li>
        <li>
          <a href="/bmi-calculator/Signup" className="flex">
            <img src={signup} className="mr-2" />
            Sign Up
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
