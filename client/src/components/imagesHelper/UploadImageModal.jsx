import React from "react";
import { useState } from "react";
import imageService from "../../services/imageService";

const UploadImageModal = ({ showModal, closeModal }) => {
  const prefixUrl =
    "http://localhost/api/share/" + localStorage.getItem("userName") + "/";
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { id, value } = e.target;

    if (id === "file") {
      setFile(file);
    }
    if (id === "description") {
      setDescription(value);
    }
  };

  const handleSubmit = async () => {
    // let fullPath = prefixUrl + path;
    const payload = { file, description };
    try {
      closeModal();
      await imageService.uploadImage(payload);
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        setError({ errors: { email: "Email or password is incorrect." } });
      }
    }
  };

  return (
    <div>
      {showModal && (
        <div
          className="modal fade  modal-xl"
          id="imageModal"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex="-1"
          aria-labelledby="imageModal"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="imageModalTitle">
                  Upload Image
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <form>
                <div className="modal-body">
                  <div className="row g-3">
                    <div className="col-sm">
                      <div className="form-outline">
                        <label className="form-label" htmlFor="file">
                          file:
                        </label>
                        <input
                          type="file"
                          className="form-control"
                          id="file"
                          aria-describedby="file"
                          value={file}
                          onChange={(e) => handleInputChange(e)}
                        />
                      </div>
                    </div>
                    <div className="col-sm">
                      <div className="form-outline">
                        <label className="form-label" htmlFor="description">
                          description:
                        </label>
                        <input
                          type="text"
                          id="description"
                          className="form-control"
                          value={description}
                          onChange={(e) => handleInputChange(e)}
                        />
                      </div>
                    </div>
                  </div>{" "}
                </div>

                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                    onClick={() => closeModal()}
                  >
                    Close
                  </button>
                  <button
                    onClick={() => handleSubmit()}
                    type="button"
                    className="btn btn-primary btn-lg"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default UploadImageModal;
