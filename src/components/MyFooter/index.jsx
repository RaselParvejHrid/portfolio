import React from "react";

import { FaLinkedinIn, FaWhatsappSquare } from "react-icons/fa";

const MyFooter = () => {
  return (
    <footer className="text-center text-white border-t-2 border-t-outer-space-crayola">
      <div className="container pt-5 mx-auto">
        <div className="flex justify-center mb-5 text-5xl">
          <a
            href="https://www.linkedin.com/in/raselparvej"
            target="_blank"
            className="mr-9 text-gray-800"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://wa.me/8801993185353"
            target="_blank"
            className="mr-9 text-gray-800"
          >
            <FaWhatsappSquare />
          </a>
        </div>
      </div>

      <div className="text-center bg-outer-space-crayola text-white py-8">
        &copy; {new Date().getFullYear()} Copyright: Muhammad Rasel Parvej
      </div>
    </footer>
  );
};

export default MyFooter;
