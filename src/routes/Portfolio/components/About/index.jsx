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
          <br /> The Wandering Samurai,
          <br /> The Dark Knight,
          <br /> The Man of Steel,
          <br /> The Sorcerer Supreme, <br />
          The Old Crazy Turtle, <br />
          and “Yes, the Panda"—
          <br />I am everything I am—
          <br />I am also everything I want to be
        </h2>
        <div className="my-8">
          <p>
            I have experience in <span className="font-bold">Flutter</span> and{" "}
            <span className="font-bold">MERN</span>. I'm a{" "}
            <span className="font-bold">React Specialist</span> and hold
            <span className="font-bold"> Upwork Certification</span> in
            JavaScript Frontend Skills.
          </p>
          <p className="mt-2">
            I excel in developing Mobile Apps with Flutter and take pride in my
            expertise.
          </p>
          <p className="mt-2">
            On the server-side, I work with Node, Express, MongoDB, MySQL, and
            NestJS, and I'm proud of my skills in this area too.
          </p>
          <p className="mt-2">
            I enjoy tackling mathematical and computational problems, working
            with algorithms, and sharing my knowledge.
          </p>
          <p className="mt-2">
            I'm particularly passionate about Theory of Computation, Artificial
            Intelligence, Machine Learning, Computer Vision, and Web 3.0.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
