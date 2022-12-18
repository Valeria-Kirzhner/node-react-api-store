import http from "./httpService";
import jwtDecode from "jwt-decode";

const tokenKey = "token";

//use for sending the token through the headers in httpService.js
export function getJwt() {
  if (Object.keys(localStorage).length !== 0) {
    return localStorage.getItem(tokenKey);
  } else {
    return null;
  }
}

export function getCurrentUser() {
  try {
    const jwt = getJwt();
    return jwtDecode(jwt);
  } catch (ex) {
    return null;
  }
}
export function logout() {
  localStorage.removeItem(tokenKey);
  localStorage.removeItem("userName");
}

export async function login(email, password) {
  const { data } = await http.post("/api/auth/signin", { email, password });
  localStorage.setItem(tokenKey, data.data.token);
  localStorage.setItem("userName", data.data.first_name);
  localStorage.setItem("userInfo", JSON.stringify(getCurrentUser()));
}
const userService = {
  logout,
  login,
  getCurrentUser,
  getJwt,
};
export default userService;
