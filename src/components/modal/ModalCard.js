import React, { useState } from "react";
import ReactModal from "react-modal";
import "./ModalCard.css";
// import UnitsConverter from "../unitsConverter/UnitsConverter";

ReactModal.setAppElement("#root");

const ModalCard = ({ image, title, titleModal, desModal, component }) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const afterOpenModal = () => {
    console.log("modal opened");
  };

  const closeModal = () => {
    setIsOpen(false);
    console.log("modal closed");
  };
  const DynamicComponent = component;

  return (
    <div>
      <div
        className="card-modal"
        onClick={openModal}
        style={{ cursor: "pointer" }}
      >
        <div className="cover-modal">
          <img src={image} alt={title} className="modal-image" />
        </div>
        <h3 className="title-modal">{titleModal}</h3>
        <div className="desc-modal">{desModal}</div>
      </div>
      <ReactModal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        className="modal"
        overlayClassName="overlay"
      >
        {/* <UnitsConverter /> i want to make this dinamis components */}
        {DynamicComponent && <DynamicComponent />}
        <button className="btn-close" onClick={closeModal}>
          close
        </button>
      </ReactModal>
    </div>
  );
};

export default ModalCard;
