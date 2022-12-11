import React from "react";
import { PhotoView } from "react-photo-view";

const Project = ({ project }) => {
  return (
    <div className="shadow-lg p-8 rounded-md">
      <h2 className="text-center font-semibold text-forest-green text-h6 mb-4">
        {project.title}
      </h2>
      <div className="h-56 overflow-clip">
        <PhotoView src={project.image}>
          <img src={project.image} />
        </PhotoView>
      </div>
      <p className="mt-8">{project.intro}</p>
      {project.techs.map((tech, index) => (
        <p key={index} className="mt-4">
          <b>{tech.title}: </b>
          {tech.text}
        </p>
      ))}
      {project.repos.map((repo, index) => (
        <p key={index} className="mt-6">
          <a
            href={repo.link}
            target="_blank"
            className="bg-outer-space-crayola p-2 rounded-md text-white"
          >
            {repo.title}
          </a>
        </p>
      ))}
      {project.deployments.map((deployment, index) => (
        <p key={index} className="mt-6">
          <a
            href={deployment.link}
            target="_blank"
            className="bg-forest-green p-2 rounded-md text-white"
          >
            {deployment.title}
          </a>
        </p>
      ))}
    </div>
  );
};

export default Project;
