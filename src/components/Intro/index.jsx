import React from "react";
import Typewriter from "typewriter-effect";

const Intro = () => {
  return (
    <section
      id="intro"
      className="bg-[url('/introback.jpg')] bg-center-bottom bg-fixed bg-no-repeat bg-cover h-[500px] md:h-[600px]  flex gap-0 md:gap-4 flex-col-reverse md:flex-row justify-around items-center"
    >
      <div>
        <h1 className="font-bold text-h5 md:text-h4 text-right">
          Muhammad Rasel Parvej
        </h1>
        <h2 className="text-h6 md:text-h5">
          <Typewriter
            options={{
              strings: [
                "A MERN Stack Developer",
                "A React Native Developer",
                "A Flutter Developer",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </h2>
      </div>

      <div>
        <img src="/me.png" className="w-48" />
      </div>
    </section>
  );
};

export default Intro;
