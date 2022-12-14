import React from "react";

const About = () => {
  return (
    <section id="about" className="container mx-auto p-16">
      <h1 className="text-center font-bold text-rich-black-fogra text-h4 mb-8">
        About Me
      </h1>
      <div className="grid lg:grid-cols-2 gap-4 items-center">
        <h2 className="text-center font-bold text-outer-space-crayola text-h6 my-8">
          Mathematician, Physicist, Computer Scientist,
          <br /> Programmer, Kung Fu Master, <br />
          The Clever Detective in the Funny Hat,
          <br /> The Dark Knight,
          <br /> The Man of Steel,
          <br /> The Sorcerer Supreme, <br />
          The Old Crazy Turtle, <br />
          and “Yes, the Panda"—
          <br />I am everything I am—
          <br />I am everything I want to be
        </h2>
        <div className="my-8">
          <p>I love to solve Mathematical and Computational Problems.</p>
          <p className="mt-2">
            I love also to work with Algorithms and love to learn things and
            share my learnings.
          </p>
          <p className="mt-2">
            Things that excite me include Theory of Computation, Artificial
            Intelligence, Machine Learning, Computer Vision, Blockchain, Web 3.0
            .
          </p>
          <p className="mt-2">
            So far, I have worked with Flutter and MERN. Now exploring React
            Native.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
