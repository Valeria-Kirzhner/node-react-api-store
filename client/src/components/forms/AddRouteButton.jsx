import React from "react";
import CreateRouteModal from "./CreateRouteModal";
const CreateRouteButton = ({}) => {
  return (
    <div class="d-grid gap-2 col-12 mx-auto mb-3">
      <button
        class="btn btn-primary"
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#routeModal"
      >
        Add new
      </button>
      <CreateRouteModal />
    </div>
  );
};
export default CreateRouteButton;
