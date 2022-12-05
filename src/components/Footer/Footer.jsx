import React from "react";
import "./Footer.css";
import logo from "../images/skyserve_logo.jpg";
const Footer = () => {
  return (
    <div className='Footer'>
      <div>
        <div>
          <img className='small_logo' src={logo} alt='logo' />
        </div>
        <div>
          <a href='https://skyserve.ai'>© 2022 SkyServe.ai</a>
        </div>
        <div>All rights reserved.</div>
      </div>
      <div>
        <div className='subheader'> Get in Touch</div>
        <div>Moonshine St.</div>
        <div>14/05 Light City,</div>
        <div>London, United Kingdom</div>
      </div>
      <div>
        <div className='subheader'>Learn More</div>
        <div>About Us</div>
        <div>Terms of Use</div>
        <div>Privacy Policy</div>
      </div>
      <div>
        <div className='subheader'>Contact Us</div>
        <div>info@gmail.com</div>
        <div>00(123)4567890</div>
      </div>
    </div>
  );
};

export default Footer;
