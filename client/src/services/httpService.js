import axios from "axios";
import { toast } from "react-toastify";
import userService from "./userService";

// it will send by default the token from the localStorage (in case it's there).
axios.defaults.headers.common["x-auth-token"] = localStorage.getItem("token");

axios.defaults.baseURL = "http://localhost:9000";

axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  let token = localStorage.getItem("token");
  axios.defaults.headers.common["x-auth-token"] = userService.getJwt();
  return config;
});

axios.interceptors.response.use(null, (error) => {
  const expectedError = error.response && error.response.status >= 403;
  if (expectedError) toast.error("An unexpected error occurrred.");
  return Promise.reject(error);
});

const http = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  patch: axios.patch,
  delete: axios.delete,
};
export default http;
