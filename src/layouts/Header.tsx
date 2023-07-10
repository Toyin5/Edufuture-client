import React from "react";
import logo from "../assets/edufuture.png"
import NavLink from "../components/NavLink"

const Header = () => {
  return (
    <header className="bg-gray-900 text-white">
      <div className="container mx-auto flex justify-between items-center py-4">
        <a href="/" className="flex items-center">
          <img src={logo} alt="Brand logo" className="w-10 mr-4" />
          <span className="font-bold text-2xl">EduFuture</span>
        </a>
        <nav className="flex space-x-4">
          <a href="/about" className="text-base">About</a>
          <a href="/products" className="text-base">Products</a>
          <a href="/contact" className="text-base">Contact</a>
        </nav>
        <NavLink
          href="/login"
          className="flex items-center justify-center gap-x-1 font-medium text-sm text-white bg-gray-800 hover:bg-gray-700 active:bg-gray-900 rounded-full"
        >
          Sign in
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
            <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
          </svg>
        </NavLink>
      </div>
    </header>
  );
};

export default Header;