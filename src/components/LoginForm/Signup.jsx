import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";
import "./AuthCommon.css";

const Signup = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const validate = () => {
    const errs = {};
    if (!form.name) errs.name = "Full name is required";
    if (!form.email) errs.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = "Invalid email";
    if (!form.password) errs.password = "Password is required";
    else if (form.password.length < 6) errs.password = "Min 6 characters";
    else if (!/[A-Z]/.test(form.password)) errs.password = "At least 1 uppercase letter";
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
      const exists = users.find((u) => u.email === form.email);
      if (exists) {
        alert("User already exists.");
        navigate("/login");
        return;
      }
      users.push(form);
      localStorage.setItem("users", JSON.stringify(users));
      alert("Signup successful!");
      navigate("/login");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-left">
        <img src="/signup-illustration.png" alt="Signup Visual" />
      </div>
      <div className="auth-right signup-form">
        <h2 className="auth-title">Create Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input name="name" value={form.name} onChange={handleChange} required />
            <label>Full Name</label>
            {errors.name && <div className="error-msg">{errors.name}</div>}
          </div>
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
          <button className="btn-submit" type="submit">Sign Up</button>
        </form>
        <p className="auth-switch">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
