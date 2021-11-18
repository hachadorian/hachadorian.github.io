import React from "react";
import resume from "../assets/TylerHachadorianResume.pdf";

const Resume = () => {
  return (
    <div className="h-screen flex justify-center p-5 bg-gradient-to-r from-red-500 to-gray-800">
      <iframe title="resume" height="100%" width="50%" src={resume} />
    </div>
  );
};

export default Resume;
