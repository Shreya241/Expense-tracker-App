import React from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import "./successModal.css";

const SuccessModal = ({modalOpen, setModalOpen}) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor:"#c1f0d5",
      borderRadius:"12px",
    },
  };
  return (
    <Modal isOpen={modalOpen} style={customStyles}>
      <div className="modal-inner">
        <lable>Expense Added Successfully!!!</lable>
        <img
          src={require("../../assets/images/added-image.png").default}
          alt="Expense Added"
          className="added-image"
        />
        <Link to="/">
        <div className="take-home-button">
            <i class="fi-rr-home"></i>
            Home
        </div>
        </Link>
        
      </div>
    </Modal>
  );
};

export default SuccessModal;
