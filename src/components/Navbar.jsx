import logo from '/assets/images/logo.svg';
import hamburgerMenu from '/assets/images/icons8-hamburger-menu.svg';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to handle hamburger click
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className='container mx-auto flex justify-between items-center px-4 py-2'>
        {/* Left Side with Logo and Links */}
        <div className='flex items-center space-x-6'>
          <img src={logo} alt='FitScale Logo' className='h-8 w-8 mr-2' />
          <ul className='hidden md:flex space-x-6 text-black'>
            <li>
              <a href='/bmi-calculator/'>Home</a>
            </li>
            <li>
              <a href='/bmi-calculator/BMI'>BMI</a>
            </li>
            <li>
              <a href='/bmi-calculator/Meals'>Meals</a>
            </li>
          </ul>
        </div>

        {/* Hamburger Menu Icon */}
        <div className='cursor-pointer md:hidden' onClick={toggleMenu}>
          <img src={hamburgerMenu} alt='Hamburger Menu' className='h-6 w-6' />
        </div>

        {/* Right Side with Log In and Sign Up */}
        <div className='hidden md:flex space-x-4 font-medium'>
          <a
            href='/bmi-calculator/Signup'
            className='bg-sky-500 text-white px-6 py-2 rounded-2xl hover:bg-sky-600'
          >
            Log In
          </a>
          <a
            href='/bmi-calculator/Signup'
            className=' text-sky-500 px-6 py-2 hover:text-sky-900'
          >
            Sign Up
          </a>
        </div>
      </div>

      {/* Mobile Navigation Links */}
      <ul
        className={`${
          isOpen ? 'block' : 'hidden'
        } bg-gray-800 text-white space-y-4 p-4 md:hidden`}
      >
        <li>
          <a href='/bmi-calculator/' className='block hover:text-gray-300'>
            Home
          </a>
        </li>
        <li>
          <a href='/bmi-calculator/BMI' className='block hover:text-gray-300'>
            BMI
          </a>
        </li>
        <li>
          <a href='/bmi-calculator/Meals' className='block hover:text-gray-300'>
            Meals
          </a>
        </li>
        <li>
          <a
            href='/bmi-calculator/Signup'
            className='block hover:text-gray-300'
          >
            Log In
          </a>
        </li>
        <li>
          <a
            href='/bmi-calculator/Signup'
            className='block hover:text-gray-300'
          >
            Sign Up
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
