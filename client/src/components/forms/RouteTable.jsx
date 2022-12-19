import React from "react";

const RouteTable = ({}) => {
  return (
    <table className="table table-hover table-bordered">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Path</th>
          <th scope="col">Description</th>
          <th scope="col">Type</th>
          <th scope="col">Show</th>
          <th scope="col">Edit</th>
          <th scope="col">Delete</th>
          <th scope="col">Visited</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
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
          <td>12</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Mark</td>
          <td>Otto</td>
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
          <td>12</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Mark</td>
          <td>Otto</td>
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
          <td>12</td>
        </tr>
      </tbody>
    </table>
  );
};
export default RouteTable;
