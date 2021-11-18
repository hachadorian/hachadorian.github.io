import React from "react";
import image from "../assets/roald.png";

const About = () => {
  return (
    <div className="flex justify-center px-96 py-20">
      <div className="flex items-center">
        <img
          src={image}
          alt="avatar"
          className="rounded-full w-56 h-56 object-cover border-4"
        />
      </div>
      <div className="border-t-2 mt-5 w-1/2 ml-24 p-5 h-4/5 text-white bg-gray-900 leading-loose">
        <h1 className="text-3xl py-5">about me:</h1>I am a passionate developer
        looking to gain experience in front-end development. I love making
        applications that look and function great for the end user. <br /> I
        recently graduated from Temple University with a BS in Information
        Science and Technology. While most of my experience in college was with
        full-stack development, I find myself more drawn towards front-end
        development.
      </div>
    </div>
  );
};

export default About;
