import React from "react";
import Draggable from "react-draggable";

import MyNavItem from "./MyNavItem";

import intro from "../../assets/nav/intro.png";
import about from "../../assets/nav/about.png";
import skills from "../../assets/nav/skills.png";
import projects from "../../assets/nav/projects.png";
import message from "../../assets/nav/message.png";

const MyNavbar = () => {
  return (
    <Draggable>
      <nav className="bg-outer-space-crayola text-white fixed left-4 top-4 my-auto rounded-lg flex flex-col gap-2">
        <MyNavItem href="#intro" tooltip="Hello!" image={intro} />
        <MyNavItem href="#about" tooltip="About me." image={about} />
        <MyNavItem href="#skills" tooltip="See my Skills." image={skills} />
        <MyNavItem
          href="#projects"
          tooltip="See my Projects"
          image={projects}
        />
        <MyNavItem
          href="#message"
          tooltip="Send me a Message."
          image={message}
        />
      </nav>
    </Draggable>
  );
};

export default MyNavbar;
