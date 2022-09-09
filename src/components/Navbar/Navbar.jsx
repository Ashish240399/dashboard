import { Avatar } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import logo from ".././images/SkyServe_logo.png";
import BasicMenu from "../MaterialIcons/Menu";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="image-div">
        <img src={logo} alt="logo" />
      </div>
      <div className="navbar-btn">
        <Link to="/login">Login</Link>
        <Link to="register">Signup</Link>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <BasicMenu />
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
