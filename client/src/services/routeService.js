import http from "./httpService";

export function createRoute(route) {
  return http.post("/api/share/create", route);
}

export function getMyRoutes() {
  return http.get("/api/share/my-routes");
}
export function editRoute(route) {
  const cardId = route.id;
  delete route.id; //in the backend is waiting validation and it uses for updating and creating new card. New card is not have any id card before creation so i can not send now id in the payload.
  return http.put(`/api/share/edit/${cardId}`, route);
}
export function deleteRoute(routeId) {
  return http.delete(`/api/share/delete/${routeId}`);
}

const routeService = {
  createRoute,
  getMyRoutes,
  editRoute,
  deleteRoute,
};

export default routeService;
