import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import { FaBars } from "react-icons/fa";

const NavBar = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <div>
      <nav className="flex flex-wrap flex-col items-center justify-between px-2 py-6 bg-gray-900 mb-3 text-red-500 fixed w-screen">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between sticky top-0">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <h1 className="text-5xl">\[T]/</h1>
            <button
              className="text-red-500 cursor-pointer text-xl leading-none px-3 py-1 rounded bg-transparent block lg:hidden"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <FaBars />
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto lg:space-x-4 pt-4 lg:pt-0">
              <li>
                <Link smooth to="/#home">
                  home
                </Link>
              </li>
              <li>
                <Link smooth to="/#about">
                  about
                </Link>
              </li>
              <li>
                <Link smooth to="/#projects">
                  projects
                </Link>
              </li>
              <li>
                <Link smooth to="/#learning">
                  learning
                </Link>
              </li>
              <li>
                <Link smooth to="/resume">
                  resume
                </Link>
              </li>
              <li>
                <Link smooth to="/blogs">
                  blogs
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
