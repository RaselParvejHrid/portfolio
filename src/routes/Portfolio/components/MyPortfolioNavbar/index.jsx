import React, { useEffect, useState } from "react";

import MyNavItem from "./MyNavItem";

import intro from "../../../../assets/nav/intro.png";
import about from "../../../../assets/nav/about.png";
import skills from "../../../../assets/nav/skills.png";
import projects from "../../../../assets/nav/projects.png";
import message from "../../../../assets/nav/message.png";
import { RiPagesFill, RiDownloadCloud2Fill } from "react-icons/ri";

const MyPortfolioNavbar = () => {
  const [showNav, setShowNav] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowNav(false);
    }, 3000);
  }, []);

  return (
    <>
      <nav className="bg-outer-space-crayola text-white fixed left-4 top-4 my-auto rounded-lg flex flex-col gap-2">
        <p className="flex justify-center m-5">
          <RiPagesFill
            className="text-baby-powder text-2xl"
            onClick={() => setShowNav(!showNav)}
          />
        </p>
        {showNav && (
          <>
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
          </>
        )}
      </nav>
      <a
        href="https://drive.google.com/uc?export=download&id=18gUkV6RdkPdgVlFVKjt6TUoeVJ1F4Ycy"
        target="_blank"
        className="shadow-lg block fixed bottom-6 left-6 bg-pantone-green p-2 px-4 font-bold rounded-md text-white"
      >
        <RiDownloadCloud2Fill className="inline text-[24px]" /> {"  "}Download
        My Latest Resume
      </a>
    </>
  );
};

export default MyPortfolioNavbar;
