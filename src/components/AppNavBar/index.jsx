import React, { useState } from "react";

import MyNavItem from "./MyNavItem";

import { GiHamburgerMenu } from "react-icons/gi";

const AppNavBar = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <nav className="bg-outer-space-crayola text-white fixed right-4 top-4 my-auto rounded-lg flex flex-col gap-2 text-center">
      <p className="flex justify-center m-5">
        <GiHamburgerMenu
          className="text-baby-powder text-2xl"
          onClick={() => setShowNav(!showNav)}
        />
      </p>
      {showNav && (
        <>
          <MyNavItem label="Portfolio" to="/" />
          <MyNavItem label="Blog" to="/blog" />
        </>
      )}
    </nav>
  );
};

export default AppNavBar;
