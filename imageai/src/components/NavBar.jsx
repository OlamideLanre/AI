import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <nav className="bg-gradient-to-r from-slate-500 to-yellow-100 px-20 py-7">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white font-bold text-lg">BARD</div>

          <ul className="flex space-x-8">
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
