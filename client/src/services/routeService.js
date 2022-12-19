import http from "./httpService";

export function createRoute(route) {
  return http.post("/api/share/create", route);
}

export function getMyRoutes() {
  return http.get("/api/share/my-routes");
}

const routeService = {
  createRoute,
  getMyRoutes,
};

export default routeService;
