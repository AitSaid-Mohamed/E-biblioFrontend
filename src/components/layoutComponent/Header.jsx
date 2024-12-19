import React from "react";
import { Link } from "react-router-dom";
import { URLS } from "../../router/URLS";

function Header() {
  return (
    <div className="container mx-auto flex justify-between items-center p-4">
      <h1 className="text-2xl font-bold">My Website</h1>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link to={URLS.GUEST.HOME} className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link to={URLS.GUEST.BOOKS} className="hover:underline">
              Books
            </Link>
          </li>
          <li>
            <Link to={URLS.GUEST.CONTACT} className="hover:underline">
              Contact
            </Link>
          </li>
          <li>
            <Link to={URLS.GUEST.SIGNUP} className="hover:underline">
              Sign up
            </Link>
          </li>
          <li>
            <Link to={URLS.GUEST.LOGIN} className="py-2 px-4 bg-blue-500 text-white font-semibold rounded-full hover:bg-blue-700 ">
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
