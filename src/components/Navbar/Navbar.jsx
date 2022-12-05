import { Avatar } from "@mui/material";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import logo from ".././images/SkyServe_logo.png";
import BasicMenu from "../MaterialIcons/Menu";
import MenuListComposition from "../MaterialIcons/Menu1";
import "./Navbar.css";
const Navbar = () => {
  const { user } = useContext(UserContext);
  return (
    <div className='navbar'>
      <div className='image-div'>
        <img src={logo} alt='logo' />
      </div>
      <div className='navbar-btn'>
        {user === undefined ? (
          <div>
            <Link to='/login'>Login</Link>
            <Link to='register'>Signup</Link>
          </div>
        ) : (
          <div>
            {user.name}
            <BasicMenu />
            {/* <MenuListComposition /> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
