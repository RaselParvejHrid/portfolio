import React from "react";
import { useLoaderData } from "react-router-dom";
import { PhotoView } from "react-photo-view";

export async function loader({ params }) {
  const projectID = params.projectID;
  const response = await fetch("/projects.json");
  const responseBody = await response.json();
  return responseBody[projectID];
}

const ProjectDetail = () => {
  const project = useLoaderData();
  return (
    <section className="container mx-auto p-16">
      <h1 className="text-center font-bold text-rich-black-fogra text-h4 mb-8">
        {project.title}
      </h1>
      <p>{project.intro}</p>
      <h2 className="text-center font-bold text-rich-black-fogra text-h6 my-8">
        Screenshots
      </h2>
      <div className="grid lg:grid-cols-3 gap-8">
        {project.images.map((image, index) => (
          <div
            key={index}
            className="h-56 overflow-clip border-2 border-gray-300"
          >
            <PhotoView src={image}>
              <img src={image} />
            </PhotoView>
          </div>
        ))}
      </div>
      <h2 className="text-center font-bold text-rich-black-fogra text-h6 my-8">
        Overview
      </h2>

      <ol className="list-decimal">
        {project.overview.map((overviewItem, index) => (
          <li key={index}>{overviewItem}</li>
        ))}
      </ol>

      {project.techs.map((tech, index) => (
        <p key={index} className="mt-4">
          <b>{tech.title}: </b>
          {tech.text}
        </p>
      ))}
      {project.repos.map((repo, index) => (
        <p key={index} className="mt-6 text-center">
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
        <p key={index} className="mt-6 text-center">
          <a
            href={deployment.link}
            target="_blank"
            className="bg-forest-green p-2 rounded-md text-white"
          >
            {deployment.title}
          </a>
        </p>
      ))}
    </section>
  );
};

export default ProjectDetail;
