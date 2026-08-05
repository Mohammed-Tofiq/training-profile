import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signinfile = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const validationErrors = {};
    if (!name.trim()) {
      validationErrors.name = "Name is required";
    }
    if (!email.trim()) {
      validationErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      validationErrors.email = "Please enter a valid email";
    }
    if (!password) {
      validationErrors.password = "Password is required";
    } else if (password.length < 6) {
      validationErrors.password = "Password must be at least 6 characters";
    }
    return validationErrors;
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
          to="/"
          style={{
            display: "inline-block",
            marginBottom: "10px",
            color: "blue",
          }}>
          Login
        </Link>
        <h2 style={{ color: "white" }}>Sign in</h2>
        <p>Enter your details to create an account:</p>
        <form onSubmit={handleSubmit}>
          <div>
            <label style={{ color: "black" }}>Name:</label>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{ width: "100%" }}
            />
            {errors.name && <div>{errors.name}</div>}
          </div>

          <div>
            <label style={{ color: "black" }}>Email:</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ width: "100%" }}
            />
            {errors.email && <div>{errors.email}</div>}
          </div>

          <div>
            <label style={{ color: "black" }}>Password:</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ width: "100%" }}
            />
            {errors.password && <div>{errors.password}</div>}
          </div>

          <button      
            type="submit"
            style={{ padding: "10px 15px", cursor: "pointer" }}
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signinfile;
