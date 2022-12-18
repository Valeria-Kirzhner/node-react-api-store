import React from "react";
import Joi from "joi-browser";
import { useEffect, useState } from "react";
import RegistretionForm from "./forms/RegistrationForm";

import { Redirect } from "react-router-dom";

const Signup = ({}) => {
  const schema = {
    email: Joi.string().required().email().label("Email"),
    password: Joi.string().required().min(6).label("Password"),
    name: Joi.string().required().min(2).label("Name"),
  };

  return (
    <div className="container h-100 mt-5">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-lg-12 col-xl-11">
          <div className="row justify-content-center">
            <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
              <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                Sign up
              </p>
              <RegistretionForm />
            </div>
            <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                className="img-fluid"
                alt="Sample image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
