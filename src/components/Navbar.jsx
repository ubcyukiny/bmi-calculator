import logo from "/assets/images/logo.svg";
import hamburgerMenu from "/assets/images/icons8-hamburger-menu.svg";
import userPFP from "/assets/images/user.svg";
import home from "/assets/images/home.svg";
import login from "/assets/images/login.svg";
import restaurant from "/assets/images/restaurant.svg";
import settings from "/assets/images/settings.svg";
import weight from "/assets/images/weight.svg";
import person from "/assets/images/person.svg";
import logout from "/assets/images/logout.svg";
import signup from "/assets/images/signup.svg";
import { useState, useRef, useEffect } from "react";
import { useAuth } from "../contexts/AuthProvider";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebase";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const buttonRef = useRef(null);
  const mobileButtonRef = useRef(null);
  const { user, loading, setloading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (buttonRef.current && buttonRef.current.contains(event.target)) {
        // button menu doesnt count as outside
        return;
      }

      if (
        mobileButtonRef.current &&
        mobileButtonRef.current.contains(event.target)
      ) {
        // button menu doesnt count as outside
        return;
      }
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  // Function to handle hamburger click
  const toggleMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
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
          <a href="/bmi-calculator/">
            <img src={logo} alt="FitScale Logo" className="h-8 w-8 mr-2" />
          </a>
          <ul className="hidden md:flex space-x-6 text-black">
            <li>
              <a href="/bmi-calculator/BMI">BMI</a>
            </li>
            <li>
              <a href="/bmi-calculator/Meals">Recipes</a>
            </li>
          </ul>
        </div>

        {/* Hamburger Menu Icon */}
        <div className="cursor-pointer md:hidden" onClick={toggleMenu}>
          <img
            src={hamburgerMenu}
            alt="Hamburger Menu"
            className="h-6 w-6"
            ref={mobileButtonRef}
          />
        </div>

        {/* Right Side with Log In and Sign Up/ or Sign out and PFP */}
        {user ? (
          <div className="hidden md:flex relative">
            {/* Profile picture button */}
            <button
              ref={buttonRef}
              onClick={toggleDropdown}
              className="relative"
            >
              <img
                src={user.photoURL || userPFP}
                alt="Profile"
                className="w-10 h-10 rounded-full object-cover"
              />
            </button>

            {/* Dropdown Menu */}
            {dropdownOpen && (
              <div
                ref={dropdownRef}
                className={`z-10 absolute right-0 top-12 mt-2 w-36 bg-zinc-100 text-black rounded-md shadow-lg
                  ${dropdownOpen ? "animate-slide-fade-in" : "hidden"}`}
              >
                <a
                  href="/bmi-calculator/MyProfile"
                  className="flex items-center  px-4 py-2 text-sm  hover:bg-zinc-300"
                >
                  <img src={person} className="mr-2" />
                  Profile
                </a>
                <a
                  href="/bmi-calculator/EditProfile"
                  className="flex items-center  px-4 py-2 text-sm  hover:bg-zinc-300"
                >
                  <img src={settings} className="mr-2" />
                  Settings
                </a>
                <button
                  className="flex  items-center r w-full text-left px-4 py-2 text-sm hover:bg-zinc-300 text-red-500"
                  onClick={handleLogout}
                >
                  <img src={logout} className="mr-2" />
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
        ref={mobileMenuRef}
        className={`${
          isMobileMenuOpen ? "block animate-slide-fade-in" : "hidden"
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
            Recipes
          </a>
        </li>
        {user ? (
          <>
            <li>
              <a href="/bmi-calculator/MyProfile" className="flex">
                <img src={person} className="mr-2" />
                Profile
              </a>
            </li>
            <li>
              <a
                href="/bmi-calculator/Login"
                className="flex"
                onClick={handleLogout}
              >
                <img src={logout} className="mr-2" />
                <span className="text-red-500">Sign Out</span>
              </a>
            </li>
          </>
        ) : (
          <>
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
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
