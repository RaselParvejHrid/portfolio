import React from "react";

const Skills = () => {
  return (
    <section id="skills" className="container mx-auto p-16">
      <h1 className="text-center font-bold text-rich-black-fogra text-h4 mb-8">
        My Skills
      </h1>
      <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-3">
        <div className="shadow-lg p-8 rounded-md">
          <h2 className="text-center font-bold m-3 text-pantone-green text-h6">
            Expert
          </h2>
          <p className="flex flex-wrap justify-center">
            {`HTML5, CSS3, Javascript (ES6), Bootstrap 5, React, React Router DOM,
            Node, Express, Dart, Flutter, Data Structures, Algorithms`
              .split(",")
              .map((tech, index) => (
                <span
                  key={index}
                  className="border-rich-black-fogra border-2 text-body-small mx-1 my-1  px-2 py-0 rounded-md"
                >
                  {tech.trim()}
                </span>
              ))}
          </p>
        </div>
        <div className="shadow-lg p-8 rounded-md">
          <h2 className="text-center font-bold m-3 text-pantone-green text-h6">
            Comfortable
          </h2>
          <p className="flex flex-wrap justify-center">
            {`Tailwind, Material Tailwind, DaisyUI, React DaisyUI, React
            Bootstrap, Material UI, MongoDB, Firebase, React Query, Typescript,
            Git, GitHub, VSCode, Firebase Admin, C, C++, PHP, Java, Python,
            Kotlin`
              .split(",")
              .map((tech, index) => (
                <span
                  key={index}
                  className="border-rich-black-fogra border-2 text-body-small mx-1 my-1  px-2 py-0 rounded-md"
                >
                  {tech.trim()}
                </span>
              ))}
          </p>
        </div>
        <div className="shadow-lg p-8 rounded-md">
          <h2 className="text-center font-bold m-3 text-pantone-green text-h6">
            Familiar
          </h2>
          <p className="flex flex-wrap justify-center">
            {`Redux, React Redux, Redux Toolkit, NextJS, React Native`
              .split(",")
              .map((tech, index) => (
                <span
                  key={index}
                  className="border-rich-black-fogra border-2 text-body-small mx-1 my-1  px-2 py-0 rounded-md"
                >
                  {tech.trim()}
                </span>
              ))}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
