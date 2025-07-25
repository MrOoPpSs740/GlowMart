import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import "./AuthCommon.css";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const validate = () => {
    const errs = {};
    if (!form.email) errs.email = "Email is required";
    if (!form.password) errs.password = "Password is required";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const users = JSON.parse(localStorage.getItem("users") || "[]");
      const match = users.find((u) => u.email === form.email && u.password === form.password);
      if (match) {
        localStorage.setItem("loggedInUser", JSON.stringify(match));
        alert("Login successful!");
        // navigate("/dashboard"); // Uncomment when dashboard is ready
      } else {
        alert("Invalid credentials.");
      }
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-left">
        <img src="/login-illustration.png" alt="Login Visual" />
      </div>
      <div className="auth-right login-form">
        <h2 className="auth-title">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input name="email" value={form.email} onChange={handleChange} required />
            <label>Email</label>
            {errors.email && <div className="error-msg">{errors.email}</div>}
          </div>
          <div className="input-group">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={form.password}
              onChange={handleChange}
              required
            />
            <label>Password</label>
            <span className="toggle-eye" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? "🙈" : "👁️"}
            </span>
            {errors.password && <div className="error-msg">{errors.password}</div>}
          </div>
          <button className="btn-submit" type="submit">Login</button>
        </form>
        <p className="auth-switch">
          Don’t have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
