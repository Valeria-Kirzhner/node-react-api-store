import { useEffect } from "react";
import userService from "../services/userService";
import { useNavigate } from "react-router-dom";

const Logout = ({}) => {
  const navigate = useNavigate();

  useEffect(() => {
    logoutUser();
  }, []);

  function logoutUser() {
    userService.logout();
    navigate("/");
  }

  return null;
};

export default Logout;
