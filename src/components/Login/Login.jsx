import React, { useContext, useState } from "react";
import logo from "../images/SkyServe_logo.png";
import demo_logo from "../images/i2.png";
import form_logo_text from "../images/geo_risk.jpeg";
import form_logo from "../images/geo_risk_img_2.jpeg";
import "./Login.css";
import { TextField } from "@mui/material";
import Footer from "../Footer/Footer";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import swal from "sweetalert";
const Login = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const { findUser } = useContext(UserContext);
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setLoginDetails({ ...loginDetails, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await fetch("http://localhost:8080/users");
    const res = await data.json();
    let present = false;
    for (let i = 0; i < res.length; i++) {
      if (
        res[i].email == loginDetails.email &&
        res[i].password == loginDetails.password
      ) {
        present = true;
        findUser(res[i]);
        break;
      }
    }
    if (present) {
      openSuccessAlert();
    } else {
      openFailureAlert();
    }
  };
  function openSuccessAlert() {
    swal("Thank you!", "Login Successful!", "success").then(() => {
      navigate("/");
    });
  }
  function openFailureAlert() {
    swal("Oops!", "Wrong Credential!", "error");
  }
  return (
    <div className='login'>
      <div className='login-container'>
        <div className='header'>
          <Link to='/'>
            <img src={logo} alt='Logo' />
          </Link>
        </div>
        <div className='body'>
          <div className='left-img'>
            <img src={demo_logo} alt='demo_logo' />
          </div>
          <div className='right-form'>
            <div className='top-img-logo'>
              <div>
                <img className='earth-logo' src={form_logo} alt='form_logo' />
              </div>
              <div>
                <img
                  className='text-logo'
                  src={form_logo_text}
                  alt='form_logo_text'
                />
              </div>
            </div>
            <form onSubmit={handleSubmit}>
              <h2>Sign In</h2>
              <p>Fill your email and password to sign in</p>
              <TextField
                onChange={handleChange}
                className='form-input'
                helperText=' '
                id='demo-helper-text-aligned-no-helper'
                placeholder='Email'
                color='warning'
                name='email'
              />
              <TextField
                onChange={handleChange}
                className='form-input'
                helperText=' '
                id='demo-helper-text-aligned-no-helper'
                placeholder='Password'
                color='warning'
                name='password'
              />
              <button className='login-btn'>Sign In</button>
            </form>
            <Link to='/forgot_password'>
              <p className='orange-text'>Forgot Password?</p>
            </Link>

            <p className='blue-text'>
              Don't have an account?
              <Link to='/register'>
                <span className='orange-text'>Sign up</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className='footer'>
        <Footer />
      </div>
      {user && (
        <div>
          <ToastContainer
            position='top-center'
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme='dark'
          />
        </div>
      )}
    </div>
  );
};

export default Login;
