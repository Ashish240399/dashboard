import React, { useContext, useState } from "react";
import logo from "../images/SkyServe_logo.png";
import demo_logo from "../images/i2.png";
import form_logo_text from "../images/geo_risk.jpeg";
import form_logo from "../images/geo_risk_img_2.jpeg";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";
import { TextField } from "@mui/material";
import Footer from "../Footer/Footer";
import { UserContext } from "../../context/UserContext";
const Register = () => {
  const navigate = useNavigate();
  const { findUser } = useContext(UserContext);
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    company_name: "",
    company_email: "",
    password: "",
  });
  const handleChange = (e) => {
    setUserDetails({
      ...userDetails,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await fetch("http://localhost:8080/users");
    const res = await data.json();
    let present = false;
    for (let i = 0; i < res.length; i++) {
      if (res[i].email == userDetails.email) {
        present = true;
        break;
      }
    }
    if (present) {
      alert("User is already present");
      navigate("/login");
    } else {
      fetch("http://localhost:8080/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userDetails),
      }).then(() => {
        alert("Registered successfully");
        navigate("/login");
      });
    }
  };
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
            <form onSubmit={handleSubmit}>
              <h2>Sign up to GeoRisk API :</h2>
              <p>Looks like your new here !</p>
              <p>Registration takes less than a minute.</p>
              <TextField
                onChange={handleChange}
                className="form-input"
                helperText=" "
                id="demo-helper-text-aligned-no-helper"
                placeholder="Your Name"
                color="warning"
                name="name"
              />
              <TextField
                onChange={handleChange}
                className="form-input"
                helperText=" "
                id="demo-helper-text-aligned-no-helper"
                placeholder="Your Email"
                color="warning"
                name="email"
              />
              <TextField
                onChange={handleChange}
                className="form-input"
                helperText=" "
                id="demo-helper-text-aligned-no-helper"
                placeholder="Company Name"
                color="warning"
                name="company_name"
              />
              <TextField
                onChange={handleChange}
                className="form-input"
                helperText=" "
                id="demo-helper-text-aligned-no-helper"
                placeholder="Company Email"
                color="warning"
                name="company_email"
              />
              <TextField
                onChange={handleChange}
                className="form-input"
                helperText=" "
                id="demo-helper-text-aligned-no-helper"
                placeholder="Password"
                color="warning"
                name="password"
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
