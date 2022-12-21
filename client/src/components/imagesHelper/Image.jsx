import React from "react";
import EditImageModal from "./EditImageModal";
import { useState } from "react";

const Image = ({ route, routes, setRoutes, deleteRoute, editRoute }) => {
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
          data-bs-target={"#editRouteModal" + route.id}
          onClick={() => openModal()}
        >
          Edit
        </button>
        <EditImageModal
          showModal={showModal}
          routes={routes}
          closeModal={closeModal}
          route={route}
          key={route.id}
          setRoutes={setRoutes}
        />
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
export default Image;
