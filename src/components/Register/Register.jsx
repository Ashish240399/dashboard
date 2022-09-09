import React from "react";
import logo from "../images/SkyServe_logo.png";
import demo_logo from "../images/i2.png";
import form_logo_text from "../images/geo_risk.jpeg";
import form_logo from "../images/geo_risk_img_2.jpeg";
import { Link } from "react-router-dom";
import "./Register.css";
import { TextField } from "@mui/material";
import Footer from "../Footer/Footer";
const Register = () => {
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
            <h1>GeoRisk API :</h1>
            <h2>Find out the risk for multiple properties with our API.</h2>
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
              <h2>Sign up to GeoRisk API :</h2>
              <p>Looks like your new here !</p>
              <p>Registration takes less than a minute.</p>
              <TextField
                className="form-input"
                helperText=" "
                id="demo-helper-text-aligned-no-helper"
                placeholder="Company Name"
                color="warning"
              />
              <TextField
                className="form-input"
                helperText=" "
                id="demo-helper-text-aligned-no-helper"
                placeholder="Company Email"
                color="warning"
              />
              <TextField
                className="form-input"
                helperText=" "
                id="demo-helper-text-aligned-no-helper"
                placeholder="Password"
                color="warning"
              />
              <TextField
                className="form-input"
                helperText=" "
                id="demo-helper-text-aligned-no-helper"
                placeholder="Confirm Password"
                color="warning"
              />
              <button className="login-btn">Sign Up</button>
            </form>
            <div className="blue-text">
              Already have an account?
              <Link to="/login">
                <span className="orange-text">Sign in</span>
              </Link>
            </div>
            <div className="blue-text">
              By Signing in, I agree to{" "}
              <span className="orange-text">Terms & Conditions</span>
            </div>
            <div className="blue-text">
              and
              <span className="orange-text">Privacy Policies</span>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Register;
