import { Component } from "react";
import userService from "../services/userService";
import { useNavigate } from "react-router-dom";

const Logout = ({}) => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/");
  });

  return null;
};

export default Logout;
