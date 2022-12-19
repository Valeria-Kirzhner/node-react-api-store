import React from "react";

const Route = ({ route }) => {
  return (
    <tr>
      <th scope="row">{route.id}</th>
      <td>{route.path}</td>
      <td>{route.type}</td>
      <td>@mdo</td>
      <td>
        <button type="button" className="btn btn-outline-dark">
          View
        </button>
      </td>
      <td>
        <button type="button" className="btn btn-outline-primary">
          Edit
        </button>
      </td>
      <td>
        <button type="button" className="btn btn-outline-danger">
          Delete
        </button>
      </td>
      <td>{route.visited}</td>
    </tr>
  );
};
export default Route;
