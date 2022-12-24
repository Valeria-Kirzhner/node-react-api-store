import http from "./httpService";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:9000";
// axios.defaults.headers.common["Content-Type"] = "multipart/form-data";
// axios.defaults.headers = {
//   "Content-type": "multipart/form-data",
// };
export function uploadImage(payload) {
  const config = {
    headers: {
      "content-type": "multipart/form-data",
    },
  };
  return axios.post("/api/image", payload, config);
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
