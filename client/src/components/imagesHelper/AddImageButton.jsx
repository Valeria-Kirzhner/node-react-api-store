import React from "react";
import { useState } from "react";
import UploadImageModal from "./UploadImageModal";

const AddImageButton = ({}) => {
  const [showModal, setShowModal] = useState(true);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);
  return (
    <div className="float-end mx-auto mb-3">
      <button
        className="btn btn-primary"
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#routeModal"
        onClick={() => openModal()}
      >
        Add new
      </button>
      <UploadImageModal
        showModal={showModal}
        closeModal={closeModal}
        backdrop="static"
      />
    </div>
  );
};
export default AddImageButton;
