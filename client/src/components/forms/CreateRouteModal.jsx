import React from "react";
import { useState } from "react";
import routeService from "../../services/routeService";

const CreateRouteModal = ({ showModal, setShowModal }) => {
  const [path, setPath] = useState("");
  const [description, setDescription] = useState("");
  const [json, setJson] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { id, value } = e.target;

    if (id === "path") {
      setPath(value);
    }
    if (id === "description") {
      setDescription(value);
    }
    if (id === "json") {
      setJson(value);
    }
  };

  const handleSubmit = async () => {
    let fullPath =
      "http://localhost/api/" + localStorage.getItem("userName") + path;
    const payload = { path: fullPath, description, response: json };
    try {
      await routeService.createRoute(payload);
      setShowModal(false);
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
          id="routeModal"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex="-1"
          aria-labelledby="routeModal"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="routeModaTitle">
                  New Route
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
                        <label className="form-label" htmlFor="path">
                          path:
                        </label>
                        <div className="input-group mb-3">
                          <span className="input-group-text" id="basic-addon3">
                            http://localhost/api/
                            {localStorage.getItem("userName")}/
                          </span>
                          <input
                            type="text"
                            className="form-control"
                            id="path"
                            aria-describedby="path"
                            value={path}
                            onChange={(e) => handleInputChange(e)}
                          />
                        </div>
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
                    <div className="mb-3">
                      <label htmlFor="json" className="col-form-label">
                        json:
                      </label>
                      <textarea
                        className="form-control"
                        id="json"
                        placeholder="[ { ... } ]"
                        value={json}
                        onChange={(e) => handleInputChange(e)}
                      ></textarea>
                    </div>
                  </div>{" "}
                </div>

                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
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
export default CreateRouteModal;
