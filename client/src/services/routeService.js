import http from "./httpService";

export function createRoute(route) {
  return http.post("/api/share/create", route);
}
const routeService = {
  createRoute,
};

export default routeService;
