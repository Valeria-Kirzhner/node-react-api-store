import http from "./httpService";

export function uploadImage(payload) {
  return http.post("/api/image", payload);
}

export function getMyRoutes() {
  return http.get("/api/share/my-routes");
}

export function deleteImage(routeId) {
  return http.delete(`/api/image/delete/${routeId}`);
}

const routeService = {
  uploadImage,
  getMyRoutes,
  deleteImage,
};

export default routeService;
