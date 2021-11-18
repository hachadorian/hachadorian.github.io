import React from "react";
import { projects } from "../utils/projects";
import Project from "./Project";

const Projects = () => {
  let alignment = true;
  return (
    <div className="grid justify-items-center text-white pt-20">
      <div className="mt-5 lg:w-1/4 p-5 text-white bg-gray-900 leading-loose mb-10 border-t-2">
        <div className="text-center text-3xl mb-3">projects:</div>
        <div>
          these are just some of the projects that i have completed through
          school and on my own time
        </div>
      </div>
      {projects.map((project) => {
        alignment = !alignment;
        return (
          <Project project={project} alignment={alignment} key={project.name} />
        );
      })}
    </div>
  );
};

export default Projects;
