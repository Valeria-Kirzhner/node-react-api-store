import React from "react";
import EditRouteModal from "./EditRouteModal";
import { useState } from "react";

const Route = ({ route, deleteRoute, editRoute }) => {
  const [showModal, setShowModal] = useState(true);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);
  return (
    <tr>
      <th scope="row">{route.id}</th>
      <td>{route.path}</td>
      <td>
        <button type="button" className="btn btn-outline-dark">
          View
        </button>
      </td>
      <td>
        <button
          type="button"
          className="btn btn-outline-primary"
          data-bs-toggle="modal"
          data-bs-target="#editRouteModal"
          onClick={() => openModal()}
        >
          <EditRouteModal
            showModal={showModal}
            closeModal={closeModal}
            route={route}
          />
        </button>
      </td>
      <td>
        <button
          type="button"
          className="btn btn-outline-danger"
          onClick={() => deleteRoute(route.id)}
        >
          Delete
        </button>
      </td>
      <td>{route.visited}</td>
    </tr>
  );
};
export default Route;
