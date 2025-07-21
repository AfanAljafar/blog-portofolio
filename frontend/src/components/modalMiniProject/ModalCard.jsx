import React, { useState } from "react";
import ReactModal from "react-modal";

ReactModal.setAppElement("#root");

const ModalCard = ({ image, title, titleModal, desModal, component }) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div>
      <div
        onClick={openModal}
        className="card-modal cursor-pointer bg-transparent w-full max-w-[350px] p-4 transition-transform duration-200 hover:scale-105 mx-auto"
      >
        <div className="cover-modal bg-white w-full h-[140px] overflow-hidden rounded-md">
          <img
            src={image}
            alt={title}
            className="modal-image w-full h-full object-cover"
          />
        </div>
        <h3 className="title-modal text-center text-lg font-semibold mt-2 text-white">
          {titleModal}
        </h3>
        <p className="desc-modal text-center text-sm text-cyan-300">
          {desModal}
        </p>
      </div>

      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Modal"
        className="modal absolute top-[10%] left-[5%] right-[5%] bottom-[10%] md:left-[200px] md:right-[200px] bg-[#f1f1f1] rounded shadow-lg flex flex-col max-h-[90vh] overflow-hidden"
        overlayClassName="fixed inset-0 bg-[rgba(49,49,49,0.8)] z-50 flex items-center justify-center"
      >
        <div className="flex-1 overflow-y-auto p-4">
          {component && component()}
        </div>

        <div className="sticky bottom-0 left-0 w-full p-4 z-10">
          <div className="flex justify-end">
            <button
              onClick={closeModal}
              className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800"
            >
              Close
            </button>
          </div>
        </div>
      </ReactModal>
    </div>
  );
};

export default ModalCard;
