import React from "react";
import { HashLink as Link } from "react-router-hash-link";

const NavBar = () => {
  return (
    <div className="grid grid-cols-2 text-red-500 shadow-lg bg-gray-900 sticky top-0">
      <div className="text-4xl ml-5 lg:ml-36 my-6">\[T]/</div>
      <div className="flex justify-end my-6 invisible lg:visible">
        <ul className="flex inline space-x-4 mr-36">
          <Link smooth to="/#home">
            home
          </Link>
          <Link smooth to="/#about">
            about
          </Link>
          <Link smooth to="/#projects">
            projects
          </Link>
          <Link smooth to="/#learning">
            learning
          </Link>
          <Link smooth to="/resume">
            resume
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
