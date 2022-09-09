import React from "react";
import logo from "../images/SkyServe_logo.png";
import demo_logo from "../images/i2.png";
import form_logo_text from "../images/geo_risk.jpeg";
import form_logo from "../images/geo_risk_img_2.jpeg";
import "./Login.css";
import { TextField } from "@mui/material";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="login">
      <div className="login-container">
        <div className="header">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        <div className="body">
          <div className="left-img">
            <img src={demo_logo} alt="demo_logo" />
          </div>
          <div className="right-form">
            <div className="top-img-logo">
              <div>
                <img className="earth-logo" src={form_logo} alt="form_logo" />
              </div>
              <div>
                <img
                  className="text-logo"
                  src={form_logo_text}
                  alt="form_logo_text"
                />
              </div>
            </div>
            <form>
              <h2>Sign In</h2>
              <p>Fill your email and password to sign in</p>
              <TextField
                className="form-input"
                helperText=" "
                id="demo-helper-text-aligned-no-helper"
                placeholder="Email"
                color="warning"
              />
              <TextField
                className="form-input"
                helperText=" "
                id="demo-helper-text-aligned-no-helper"
                placeholder="Password"
                color="warning"
              />
              <button className="login-btn">Sign In</button>
            </form>
            <Link to="/forgot_password">
              <p className="orange-text">Forgot Password?</p>
            </Link>

            <p className="blue-text">
              Don't have an account?
              <Link to="/register">
                <span className="orange-text">Sign up</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Login;
