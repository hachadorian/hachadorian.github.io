import React from "react";

const Project = ({ project, alignment }) => {
  const borderStyle = alignment
    ? "from-red-500 to-gray-800"
    : "from-gray-800 to-red-500";

  const image = (
    <div className={"m-5 bg-gradient-to-r p-2 ".concat(borderStyle)}>
      <img
        src={require(`../assets/${project.image}`).default}
        alt={project.name}
      />
    </div>
  );

  const info = (
    <div className="mt-5 px-5">
      <h1 className="text-3xl mb-5">{project.name}</h1>
      <div>{project.description}</div>
      <div className="my-2">frontend: {project.frontend.join(", ")}</div>
      <div className="my-2">backend: {project.backend.join(", ")}</div>
      <div>
        {project.source ? (
          <a className="pr-2 hover:underline" href={project.source}>
            repo
          </a>
        ) : null}
        {project.live ? (
          <a className="hover:underline" href={project.live}>
            live
          </a>
        ) : null}
      </div>
    </div>
  );

  return (
    <div className="flex justify-center mt-5">
      {alignment ? (
        <div className="grid grid-cols-2 w-4/5 py-5">
          {image}
          {info}
        </div>
      ) : (
        <div className="grid grid-cols-2 w-4/5 py-5">
          {info}
          {image}
        </div>
      )}
    </div>
  );
};

export default Project;
