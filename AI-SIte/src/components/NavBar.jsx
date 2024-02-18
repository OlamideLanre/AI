import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <nav className="bg-[#020024] px-20 py-7">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white font-bold text-2xl">Galaxy✨</div>

          <ul className="flex space-x-10 text-sm">
            <li>
              <Link to="/" className="text-white hover:text-gray-500">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-white hover:text-gray-500">
                About
              </Link>
            </li>
            <li>
              <Link to="/" className="text-white hover:text-gray-500">
                WaitList
              </Link>
            </li>
            <li>
              <Link to="/" className="text-white hover:text-gray-500">
                FAQs
              </Link>
            </li>
            <li>
              <Link to="/" className="text-white hover:text-gray-500">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
export default NavBar;
