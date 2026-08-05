import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const LoginFile = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const readerror = {};
    if (!email.trim()) {
      readerror.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      readerror.email = "Please enter a valid email";
    }
    if (!password) {
      readerror.password = "Password is required";
    }
    return readerror;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      navigate("/home");
    }
  };

  return (
    <div className="card">
      <div className="card-body">
        <Link
          to="/signin"
          style={{
            display: "inline-block",
            marginBottom: "10px",
            color: "blue",
          }}
        >
          Sign In
        </Link>
        <h2 style={{ color: "black" }}>Login</h2>
        Enter your Email and Password:-
        <form onSubmit={handleSubmit}>
          <label style={{ color: "black" }}>Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="enter your email"
            style={{ width: "100%" }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={errors.email ? "input-error" : ""}
          />

          {errors.email && <span className="error">{errors.email}</span>}

          <label style={{ color: "black" }}>
            <br />Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="enter your password"
            style={{ width: "100%" }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={errors.password ? "input-error" : ""}
          />
          {errors.password && <span className="error">{errors.password}</span>}
          <button
            type="submit"
            style={{ padding: "10px 15px", cursor: "pointer" }}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};
export default LoginFile;
