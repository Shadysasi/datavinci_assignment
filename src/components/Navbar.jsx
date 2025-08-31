import { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { RiShoppingBag4Fill } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";
import { MdAccountCircle } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import logo from "../assets/logo.png"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartItems] = useState(3);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/*Hamburger menu (mobile only) */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-600 hover:text-amber-600 hover:bg-amber-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-amber-500"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <IoClose size={22} /> : <GiHamburgerMenu size={22} />}
            </button>
          </div>

          {/* Left side */}
          <div className="hidden md:flex items-center">
            <button className="text-sm text-gray-900 border border-gray-300 rounded-full px-4 py-2 hover:bg-amber-50 hover:border-amber-200 transition-colors duration-200 whitespace-nowrap">
              WHICH MANUKA IS FOR ME?
            </button>
          </div>

          {/*Logo */}
          <div className="flex items-center justify-center flex-1 md:flex-initial">
            <div className="flex items-center mx-2 md:mx-4">
              <img src={logo} alt="Logo" className="h-8 md:h-10 w-auto" />
            </div>
          </div>

          {/* Navigation links */}
          <div className="hidden md:flex md:items-center md:space-x-6 lg:space-x-8">
            <a href="#" className="text-gray-700 hover:text-amber-600 inline-flex items-center px-1 pt-1 text-sm font-medium transition-colors duration-200 whitespace-nowrap">
              Shop
            </a>
            <a href="#" className="text-gray-700 hover:text-amber-600 inline-flex items-center px-1 pt-1 text-sm font-medium transition-colors duration-200 whitespace-nowrap">
              Explore
            </a>
            <a href="#" className="text-gray-700 hover:text-amber-600 inline-flex items-center px-1 pt-1 text-sm font-medium transition-colors duration-200 whitespace-nowrap">
              About
            </a>
            <a href="#" className="text-gray-700 hover:text-amber-600 inline-flex items-center px-1 pt-1 text-sm font-medium transition-colors duration-200 whitespace-nowrap">
              Rewards
            </a>
            <a href="#" className="text-gray-700 hover:text-amber-600 inline-flex items-center px-1 pt-1 text-sm font-medium transition-colors duration-200 whitespace-nowrap">
              Contact
            </a>
          </div>
          
          {/* Right side icons and buttons */}
          <div className="flex items-center space-x-1 sm:space-x-2">
            {/* Search Icon */}
            <button className="p-2 rounded-full text-gray-600 hover:text-amber-600 hover:bg-amber-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-colors duration-200">
              <IoSearch size={20} className="md:hidden" />
              <IoSearch size={22} className="hidden md:block" />
            </button>

            {/* Sign In Button */}
            <button className="p-2 rounded-full text-gray-600 hover:text-amber-600 hover:bg-amber-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-colors duration-200">
              <MdAccountCircle size={20} className="md:hidden" />
              <MdAccountCircle size={22} className="hidden md:block" />
            </button>
            
            {/* Cart Icon with badge */}
            <div className="relative">
              <button className="p-2 rounded-full text-gray-600 hover:text-amber-600 hover:bg-amber-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-colors duration-200">
                <RiShoppingBag4Fill size={20} className="md:hidden" />
                <RiShoppingBag4Fill size={22} className="hidden md:block" />
                {cartItems > 0 && (
                  <span className="absolute -top-1 -right-1 inline-flex items-center justify-center w-5 h-5 text-xs font-bold leading-none text-white bg-amber-600 rounded-full border border-white">
                    {cartItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 shadow-inner">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-amber-50 hover:text-amber-600">
                Shop
              </a>
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-amber-50 hover:text-amber-600">
                Explore
              </a>
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-amber-50 hover:text-amber-600">
                About
              </a>
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-amber-50 hover:text-amber-600">
                Rewards
              </a>
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-amber-50 hover:text-amber-600">
                Contact
              </a>
              <button className="w-full text-left block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-amber-50 hover:text-amber-600">
                WHICH MANUKA IS FOR ME?
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;