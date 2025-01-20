import "./Auth.css";
import axios from "axios";
import { useState } from "react";
import { ImHome } from "react-icons/im";
import { Link, useNavigate } from "react-router-dom";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isLogin && formData.password !== formData.passwordConfirm) {
      setMessage("Passwords do not match");
      setSuccess(false);
      return;
    }

    try {
      if (isLogin) {
        await axios.post(
          "/api/users/login",
          {
            email: formData.email,
            password: formData.password,
          },
          { withCredentials: true }
        );
        setMessage("Login successful");
        sessionStorage.setItem("isLoggin", "true");
      } else {
        await axios.post(
          "/api/users/register",
          {
            name: formData.name,
            email: formData.email,
            password: formData.password,
          },
          { withCredentials: true }
        );
        setMessage("Registration successful! Please login.");
      }
      setSuccess(true);
      navigate("/");

      setFormData({
        name: "",
        email: "",
        password: "",
        passwordConfirm: "",
      });
    } catch (error) {
      setMessage(error.response?.data?.message || "Something went wrong");
      setSuccess(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1 className="auth-header">{isLogin ? "Login" : "Register"}</h1>
        <Link to="/">
          {" "}
          <ImHome className="iconHome" />
        </Link>
        <div className="auth-toggle-buttons">
          <button
            onClick={() => {
              setIsLogin(true);
              setMessage("");
              setSuccess(false);
            }}
            disabled={isLogin}
          >
            Login
          </button>
          <button
            onClick={() => {
              setIsLogin(false);
              setMessage("");
              setSuccess(false);
            }}
            disabled={!isLogin}
          >
            Register
          </button>
        </div>
        <form className="auth-form" onSubmit={handleSubmit}>
          <input
            className="auth-input"
            type="text"
            name="email"
            placeholder="Email or Name"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {!isLogin && (
            <input
              className="auth-input"
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          )}
          <input
            className="auth-input"
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          {!isLogin && (
            <input
              className="auth-input"
              type="password"
              name="passwordConfirm"
              placeholder="Confirm Password"
              value={formData.passwordConfirm}
              onChange={handleChange}
              required
            />
          )}
          <button className="auth-submit-button" type="submit">
            {isLogin ? "Login" : "Register"}
          </button>
        </form>
        {message && (
          <p
            style={{ color: success ? "green" : "red" }}
            className="auth-message"
          >
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default Auth;
