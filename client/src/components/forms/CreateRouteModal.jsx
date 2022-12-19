import React from "react";

const CreateRouteModal = ({}) => {
  return (
    <div
      class="modal fade  modal-xl"
      id="routeModal"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="routeModal"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="routeModaTitle">
              New Route
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="row g-3">
              <div class="col-sm">
                <div class="form-outline">
                  <label class="form-label" for="path">
                    path:
                  </label>
                  <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon3">
                      http://localhost/share/api/
                    </span>
                    <input
                      type="text"
                      class="form-control"
                      id="basic-url"
                      aria-describedby="basic-addon3"
                    />
                  </div>
                </div>
              </div>
              <div class="col-sm">
                <div class="form-outline">
                  <label class="form-label" for="description">
                    description:
                  </label>
                  <input type="text" id="description" class="form-control" />
                </div>
              </div>
              <div class="mb-3">
                <label for="message-text" class="col-form-label">
                  json:
                </label>
                <textarea
                  class="form-control"
                  id="message-text"
                  placeholder="[ { ... } ]"
                ></textarea>
              </div>
            </div>{" "}
          </div>

          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn btn-primary">
              save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CreateRouteModal;
