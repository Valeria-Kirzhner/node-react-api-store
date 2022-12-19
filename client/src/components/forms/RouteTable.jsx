import React from "react";
import { useState, useEffect } from "react";
import routeServise from "../../services/routeService";
import Route from "./Route";

const RouteTable = ({}) => {
  const [routes, setRoutes] = useState([]);

  useEffect(() => {
    getMyRoutes();
  }, []);
  const getMyRoutes = async () => {
    const { data } = await routeServise.getMyRoutes();
    if (data.length > 0) this.setState({ cards: data });
  };

  return (
    <table className="table table-hover table-bordered">
      {routes.length > 0 && (
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Path</th>
            <th scope="col">Type</th>
            <th scope="col">Show</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
            <th scope="col">Visited</th>
          </tr>
        </thead>
      )}
      <tbody>
        {routes.length > 0 &&
          routes.map((route) => {
            return <Route route={route} />;
          })}
      </tbody>
    </table>
  );
};
export default RouteTable;
