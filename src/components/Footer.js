import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gray-900">
      <div className="flex flex-col text-center text-red-500 block p-5">
        <div className="flex flex-row justify-center mb-2">
          <a href="https://github.com/hachadorian">
            <FaGithub class="self-center mx-2" size={24} />
          </a>
          <a href="https://www.linkedin.com/in/tyler-hachadorian/">
            <FaLinkedin class="self-center mx-2" size={24} />
          </a>
        </div>
        <div>Made with ❤️ by Tyler Hachadorian</div>
      </div>
    </div>
  );
};

export default Footer;
