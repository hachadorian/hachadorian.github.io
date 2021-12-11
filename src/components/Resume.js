import React from "react";
import resume from "../assets/TylerHachadorianResume.pdf";

const Resume = () => {
  return (
    <div className="h-screen flex justify-center bg-gradient-to-r from-red-500 to-gray-800">
      <iframe
        title="resume"
        height="100%"
        width="50%"
        src={resume}
        className="pt-36 pb-12"
      />
    </div>
  );
};

export default Resume;
