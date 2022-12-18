import React from "react";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import http from "../../services/httpService";
import { useNavigate } from "react-router-dom";

const RegistrationForm = ({}) => {
  const navigate = useNavigate();

  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [statment, setStatment] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "first_name") {
      setFirstName(value);
    }
    if (id === "last_name") {
      setLastName(value);
    }
    if (id === "email") {
      setEmail(value);
    }
    if (id === "password") {
      setPassword(value);
    }
    if (id === "confirmPassword") {
      setConfirmPassword(value);
    }
  };
  const handleSubmit = async () => {
    const payload = { first_name, last_name, email, password, premium: 0 };

    try {
      await http.post("/api/auth/signup", payload);
      toast("A new acoount is opened");
      navigate("/signin");
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        setError({ errors: { email: "Email is taken" } });
      }
    }
  };

  return (
    <form className="mx-1 mx-md-4">
      <div className="row">
        <i className="fas fa-user fa-lg me-3 fa-fw"></i>

        <div className="col-auto">
          <label className="form-label" htmlFor="first_name">
            Your Name
          </label>
          <div className="input-group form-outline flex-fill mb-0">
            <input
              type="text"
              id="first_name"
              className="form-control"
              value={first_name}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
        </div>
        <div className="col-auto">
          <label className="form-label" htmlFor="last_name">
            Last Name
          </label>
          <div className="input-group form-outline flex-fill mb-0">
            <input
              type="text"
              id="last_name"
              className="form-control"
              value={last_name}
              onChange={(e) => handleInputChange(e)}
            />
          </div>{" "}
        </div>
      </div>
      <div className="d-flex flex-row align-items-center mb-4">
        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
        <div className="form-outline flex-fill mb-0">
          <label className="form-label" htmlFor="email">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            className="form-control"
            value={email}
            onChange={(e) => handleInputChange(e)}
          />

          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
      </div>

      <div className="d-flex flex-row align-items-center mb-4">
        <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
        <div className="form-outline flex-fill mb-0">
          <label className="form-label" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="form-control"
            value={password}
            onChange={(e) => handleInputChange(e)}
          />
        </div>
      </div>

      <div className="d-flex flex-row align-items-center mb-4">
        <i className="fas fa-key fa-lg me-3 fa-fw"></i>
        <div className="form-outline flex-fill mb-0">
          <label className="form-label" htmlFor="confirmPassword">
            Repeat your password
          </label>
          <input
            type="password"
            id="confirmPassword"
            className="form-control"
            value={confirmPassword}
            onChange={(e) => handleInputChange(e)}
          />
        </div>
      </div>

      <div className="form-check d-flex justify-content-center mb-5">
        <input
          className="form-check-input me-2"
          type="checkbox"
          value="statment"
          id="statment"
        />
        <label className="form-check-label" htmlFor="statment">
          I agree all statements in <a href="#!">Terms of service</a>
        </label>
      </div>

      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
        <button
          onClick={() => handleSubmit()}
          type="button"
          className="btn btn-primary btn-lg"
        >
          Register
        </button>
      </div>
    </form>
  );
};

export default RegistrationForm;
