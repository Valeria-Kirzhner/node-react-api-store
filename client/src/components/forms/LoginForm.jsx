import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import userService from "../../services/userService";
import { useNavigate } from "react-router-dom";

const LoginForm = ({}) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { id, value } = e.target;

    if (id === "email") {
      setEmail(value);
    }
    if (id === "password") {
      setPassword(value);
    }
  };
  const handleSubmit = async () => {
    try {
      await userService.login(email, password);
      toast("A new acoount is opened");
      navigate("/");
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        setError({ errors: { email: "Email or password is incorrect." } });
      }
    }
  };

  return (
    <form>
      {/* <!-- Email input --> */}
      <div className="form-outline mb-4">
        <input
          type="email"
          id="email"
          className="form-control form-control-lg"
          placeholder="Enter a valid email address"
          value={email}
          onChange={(e) => handleInputChange(e)}
        />
        <label className="form-label" htmlFor="email">
          Email address
        </label>
      </div>

      {/* <!-- Password input --> */}
      <div className="form-outline mb-3">
        <input
          type="password"
          id="password"
          className="form-control form-control-lg"
          placeholder="Enter password"
          value={password}
          onChange={(e) => handleInputChange(e)}
        />
        <label className="form-label" htmlFor="password">
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
          onClick={() => handleSubmit()}
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
