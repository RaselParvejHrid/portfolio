import React from "react";
import { Link, useMatch } from "react-router-dom";

const MyNavItem = ({ label, to }) => {
  const match = useMatch(to);
  let activeStyle = "";
  if (match) {
    activeStyle = "underline underline-offset-4 decoration-pantone-green";
  }
  return (
    <Link to={to} className={[activeStyle, "m-1 mt-0 p-1"].join(" ")}>
      {label}
    </Link>
  );
};

export default MyNavItem;
