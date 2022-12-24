import React from "react";
import { useState } from "react";
import imageService from "../../services/imageService";
import FormData from "form-data";

const UploadImageModal = ({ showModal, closeModal }) => {
  const [description, setDescription] = useState("");
  const [file, setFile] = useState({ preview: "", data: "" });
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { id, value } = e.target;

    if (id === "file") {
      const img = {
        preview: URL.createObjectURL(e.target.files[0]),
        data: e.target.files[0],
      };
      setFile(img);
    }
    if (id === "description") {
      setDescription(value);
    }
  };

  const handleSubmit = async () => {
    let formData = new FormData();
    formData.append("file", file);
    console.log(formData);
    const payload = { formData, description };
    try {
      closeModal();
      await imageService.uploadImage(formData);
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
              <form enctype="multipart/form-data" method="post">
                <div className="modal-body">
                  <div className="row g-3">
                    <div className="col-sm">
                      <div className="form-outline">
                        <label className="form-label" htmlFor="file">
                          file:
                        </label>
                        <input
                          type="file"
                          name="file"
                          className="form-control"
                          id="file"
                          aria-describedby="file"
                          onChange={handleInputChange}
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
                  <div className="col-sm mt-3">
                    <div className="form-outline">
                      {file.preview && (
                        <img src={file.preview} width="100" height="70" />
                      )}
                    </div>
                  </div>
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
