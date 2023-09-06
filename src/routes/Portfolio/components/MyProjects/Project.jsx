import React from "react";
import { PhotoView } from "react-photo-view";
import { Link } from "react-router-dom";

const Project = ({ project, projectIndex, totalNumberOfProjects }) => {
  return (
    <div className="shadow-lg p-8 rounded-md">
      <h2 className="text-center font-semibold text-forest-green text-h6 mb-4">
        {project.title}
      </h2>
      <div className="h-56 overflow-clip">
        <PhotoView src={project.images[0]}>
          <img src={project.images[0]} />
        </PhotoView>
      </div>
      <p className="mt-8 h-36">{project.intro}</p>

      <Link />

      <p className="mt-6 text-center">
        <Link
          to={`/project/${totalNumberOfProjects - projectIndex - 1}`}
          className="bg-outer-space-crayola p-2 px-6 rounded-md text-white"
        >
          See Details
        </Link>
      </p>

      {project.deployments.map((deployment, index) => (
        <p key={index} className="mt-6 text-center">
          <a
            href={deployment.link}
            target="_blank"
            className="bg-forest-green p-2 px-6 rounded-md text-white"
          >
            {deployment.title}
          </a>
        </p>
      ))}
    </div>
  );
};

export default Project;
