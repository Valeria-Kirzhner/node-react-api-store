import React from "react";
import { useState, useEffect } from "react";
import routeServise from "../../services/routeService";
import Image from "./Image";
const ImageTable = ({}) => {
  const [routes, setRoutes] = useState([]);

  useEffect(() => {
    getMyRoutes();
  }, []);

  const getMyRoutes = async () => {
    let { data } = await routeServise.getMyRoutes();
    data = data.data;
    setRoutes(data);
  };

  const editRoute = () => {};

  const deleteRoute = async (routeId) => {
    let filteredRoutes = [...routes];
    filteredRoutes = filteredRoutes.filter((route) => route.id !== routeId); // it will return all users cards exept of the card with the cardId.
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
              <Image
                routes={routes}
                setRoutes={setRoutes}
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
export default ImageTable;
