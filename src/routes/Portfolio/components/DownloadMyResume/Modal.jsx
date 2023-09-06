import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black opacity-90 z-40 ${
          isOpen ? "" : "hidden"
        }`}
      />
      <div
        className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-lg shadow-lg z-50 ${
          isOpen ? "" : "hidden"
        }`}
      >
        {children}
        <button
          onClick={onClose}
          className="mx-auto block mt-8 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
        >
          Close
        </button>
      </div>
    </>
  );
};

export default Modal;
