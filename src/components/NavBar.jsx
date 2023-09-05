import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="sticky bg-[#E9B224] py-5 px-2 w-full text-white">
      <div className="flex justify-between items-center h-full px-2 max-w-[85rem] mx-auto w-full">
        <div>
          <span className="text-3xl font-bold">Logo</span>
        </div>

        <div className="flex space-x-4 h-full items-center justify-center">
          <ul className="flex space-x-4">
            <li>
              {/* Use Link components instead of anchor tags */}
              <Link to="/" className="hover:text-yellow-50">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-yellow-50">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-yellow-50">
                Contact
              </Link>
            </li>
          </ul>

          <Link
            to="/login"
            className="border border-white px-6 py-2 rounded-md text-white hover:bg-[#E9B224]"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
