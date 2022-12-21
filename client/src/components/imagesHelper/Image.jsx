import React from "react";
import { useState } from "react";

const Image = ({ image, deleteImage }) => {
  const [showModal, setShowModal] = useState(true);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);
  return (
    <tr>
      <th scope="row">{image.id}</th>
      <td></td>
      <td>{image.path}</td>
      <td>
        <button type="button" className="btn btn-outline-dark">
          View
        </button>
      </td>
      <td>
        <button
          type="button"
          className="btn btn-outline-danger"
          onClick={() => deleteImage(image.id)}
        >
          Delete
        </button>
      </td>
      <td>{image.visited}</td>
    </tr>
  );
};
export default Image;
