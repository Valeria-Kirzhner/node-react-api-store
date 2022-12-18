import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const LoginForm = ({}) => {
  const [data, setData] = useState({ email: "", password: "", name: "" });
  const [errors, setErrors] = useState({});

  return (
    <form>
      {/* <!-- Email input --> */}
      <div className="form-outline mb-4">
        <input
          type="email"
          id="form3Example3"
          className="form-control form-control-lg"
          placeholder="Enter a valid email address"
        />
        <label className="form-label" htmlFor="form3Example3">
          Email address
        </label>
      </div>

      {/* <!-- Password input --> */}
      <div className="form-outline mb-3">
        <input
          type="password"
          id="form3Example4"
          className="form-control form-control-lg"
          placeholder="Enter password"
        />
        <label className="form-label" htmlFor="form3Example4">
          Password
        </label>
      </div>

      <div className="d-flex justify-content-between align-items-center">
        {/* <!-- Checkbox --> */}
        <div className="form-check mb-0">
          <input
            className="form-check-input me-2"
            type="checkbox"
            value=""
            id="form2Example3"
          />
          <label className="form-check-label" htmlFor="form2Example3">
            Remember me
          </label>
        </div>
        <a href="#!" className="text-body">
          Forgot password?
        </a>
      </div>

      <div className="text-center text-lg-start mt-4 pt-2">
        <button
          type="button"
          className="btn btn-primary btn-lg"
          style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
        >
          Login
        </button>
        <p className="small fw-bold mt-2 pt-1 mb-0">
          Don't have an account?{" "}
          <Link className="navbar-brand text-danger" to="/signup">
            Register
          </Link>
        </p>
      </div>
    </form>
  );
};

export default LoginForm;
