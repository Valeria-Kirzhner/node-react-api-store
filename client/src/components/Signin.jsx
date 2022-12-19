import React from "react";
import "./styles/Signin.css";
import LoginForm from "./forms/LoginForm";
import { useNavigate } from "react-router-dom";
import userService from "../services/userService";
import { useEffect } from "react";

const Signin = ({}) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (userService.getCurrentUser()) navigate("/");
  }, []);

  return (
    <section className="vh-100">
      <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="img-fluid"
              alt="Sample image"
            />
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <p className="h1 fw-bold">Login</p>

            <div className="divider d-flex align-items-center my-4"></div>

            <LoginForm />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Signin;
