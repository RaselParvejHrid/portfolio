import React, { useEffect, useState } from "react";
import MySpinnerDottedOnCenter from "../MySpinnerDottedOnCenter";
import Project from "./Project";

const MyProjects = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("/projects.json");
        const responseBody = await response.json();
        setProjects(responseBody);
      } catch (err) {
        console.error(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    setError(false);
    setLoading(true);
    fetchProjects();
  }, []);

  if (error) {
    return (
      <p className="text-red-500 font-bold text-center">
        Error! Please, reload the Page.
      </p>
    );
  }

  if (loading) {
    return <MySpinnerDottedOnCenter size={70} />;
  }

  return (
    <section id="projects" className="container mx-auto p-16">
      <h1 className="text-center font-bold text-rich-black-fogra text-h4 mb-8">
        My Projects
      </h1>
      <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default MyProjects;
