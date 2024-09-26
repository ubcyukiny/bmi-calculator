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
      <div className='container mx-auto flex justify-between items-center p-2'>
        <div className='flex items-center'>
          <img src={logo} alt='FitScale Logo' className='h-8 w-8 mr-2' />
          <h1>FitScale</h1>
        </div>

        {/* Hamburger Menu Icon */}
        <div className='cursor-pointer md:hidden' onClick={toggleMenu}>
          <img src={hamburgerMenu} alt='Hamburger Menu' className='h-6 w-6' />
        </div>

        {/* Desktop Navigation Links */}
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
          <li>
            <a href='/bmi-calculator/Signup'>Sign In/ Sign up</a>
          </li>
        </ul>
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
          <a href='/bmi-calculator.BMI' className='block hover:text-gray-300'>
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
            Sign in/ Sign up
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
