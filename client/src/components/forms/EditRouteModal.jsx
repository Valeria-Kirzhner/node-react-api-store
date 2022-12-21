import React from "react";
import { useState, useEffect, useRef } from "react";
import routeService from "../../services/routeService";

const EditRouteModal = ({
  route,
  setRoutes,
  routes,
  showModal,
  closeModal,
}) => {
  const [path, setPath] = useState("");
  const [shortPath, setShortPath] = useState("");
  const [description, setDescription] = useState("");
  const [json, setJson] = useState("");
  const [error, setError] = useState("");

  const pathRef = useRef(null);
  const descRef = useRef(null);
  const jsonRef = useRef(null);

  useEffect(() => {
    updateStates();
  }, [route]);

  const updateStates = () => {
    setPath(route.path);
    setDescription(route.description);
    setJson(route.response);
    shortedPath(route.path);
  };

  //   const handleInputChange = (e) => {
  //     const { id, value } = e.target;

  //     if (id === "path") {
  //       setPath(value);
  //     }
  //     if (id === "description") {
  //       setDescription(value);
  //     }
  //     if (id === "json") {
  //       setJson(value);
  //     }
  //   };

  const handleSubmit = async () => {
    const pathValue = pathRef.current.value;
    const descValue = descRef.current.value;
    const jsonValue = jsonRef.current.value;

    let fullPath =
      "http://localhost/api/" +
      localStorage.getItem("userName") +
      "/" +
      pathValue;
    const payload = {
      path: fullPath,
      description: descValue,
      response: jsonValue,
    };
    try {
      closeModal();
      await routeService.editRoute(route.id, payload);
      updateRoutesChanges(route.id, payload);
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        setError({ errors: { email: "Email or password is incorrect." } });
      }
    }
  };
  const updateRoutesChanges = (routeId, payload) => {
    let mappedRoutes = [...routes];
    mappedRoutes = mappedRoutes.map((r) => {
      var temp = Object.assign({}, r);
      if (temp.id == routeId) {
        temp.path = payload.path;
        temp.description = payload.description;
        temp.response = payload.response;
      }
      return temp;
    });
    console.log(mappedRoutes);
    setRoutes(mappedRoutes);
  };
  const shortedPath = (longPath) => {
    const prefixPath =
      "http://localhost/api/" + localStorage.getItem("userName") + "/";
    const shorted = longPath.replace(prefixPath, "");
    setShortPath(shorted);
  };

  return (
    <div>
      {showModal && (
        <div
          className="modal fade  modal-xl"
          id={"editRouteModal" + route.id}
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex="-1"
          aria-labelledby="editRouteModal"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="editRouteModalTitle">
                  Edit Route
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
                            defaultValue={shortPath}
                            // onChange={(e) => handleInputChange(e)}
                            ref={pathRef}
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
                          defaultValue={description}
                          //   onChange={(e) => handleInputChange(e)}
                          ref={descRef}
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
                        defaultValue={json}
                        // onChange={(e) => handleInputChange(e)}
                        ref={jsonRef}
                      ></textarea>
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
export default EditRouteModal;
