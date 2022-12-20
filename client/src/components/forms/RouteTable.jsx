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
    let { data } = await routeServise.getMyRoutes();
    console.log(data.data);
    data = data.data;
    setRoutes(data);
  };

  const editRoute = () => {};

  const deleteRoute = async (routeId) => {
    let filteredRoutes = [...routes];
    console.log(filteredRoutes);
    filteredRoutes = filteredRoutes.filter((route) => route.id !== routeId); // it will return all users cards exept of the card with the cardId.
    console.log(filteredRoutes);

    setRoutes(filteredRoutes);
    await routeServise.deleteRoute(routeId);
  };

  return (
    <table className="table table-hover table-bordered">
      {routes.length > 0 && (
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Path</th>
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
            return (
              <Route
                route={route}
                key={route.id}
                editRoute={editRoute}
                deleteRoute={deleteRoute}
              />
            );
          })}
      </tbody>
    </table>
  );
};
export default RouteTable;
