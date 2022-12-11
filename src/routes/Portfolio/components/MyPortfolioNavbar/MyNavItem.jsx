import React from "react";

const MyNavItem = ({ href, image, tooltip }) => {
  return (
    <a
      href={href}
      className="m-2 p-2 group relative border-transparent border-2 active:border-forest-green active:border-2 rounded-md"
    >
      <img src={image} width={32} />
      <p className="hidden group-hover:block absolute left-[100%] top-0 ml-2 bg-pantone-green rounded-md p-3 w-max">
        {tooltip}
      </p>
    </a>
  );
};

export default MyNavItem;
