import React, { useState } from "react";
import { RiDownloadCloud2Fill } from "react-icons/ri";
import Modal from "./Modal";

const resumes = [
  {
    label: "Javascript | React | MERN",
    url: "https://drive.google.com/uc?export=download&id=18gUkV6RdkPdgVlFVKjt6TUoeVJ1F4Ycy",
  },
  {
    label: "Flutter",
    url: "https://drive.google.com/uc?export=download&id=1R251m0ETNhB-EXrRpow6lELCZNDSPkq3",
  },
];

const DownloadMyResume = () => {
  const [showModal, setShowModal] = useState(false);

  const onOpeningModal = () => {
    setShowModal(true);
  };
  const onClosingModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div
        onClick={onOpeningModal}
        className="cursor-pointer shadow-lg block fixed bottom-6 left-6 bg-pantone-green p-2 px-4 font-bold rounded-md text-white"
      >
        <RiDownloadCloud2Fill className="inline text-[24px]" /> {"  "}Download
        My Latest Resume
      </div>
      <Modal isOpen={showModal} onClose={onClosingModal}>
        <ul class="list-none space-y-2 divide-y-2">
          {resumes.map((resume) => (
            <li key={resume.label}>
              <a
                href={resume.url}
                class="text-blue-500 hover:text-blue-700 transition duration-300 ease-in-out"
              >
                {resume.label}
              </a>
            </li>
          ))}
        </ul>
      </Modal>
    </>
  );
};

export default DownloadMyResume;
