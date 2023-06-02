import React from "react";
import "./FooterStyles.css";
import { FaFacebook, FaGithub, FaHome, FaInstagram, FaLinkedinIn, FaMailBulk, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
         
          <div>
            <p>325,Civil Ward No. 07,</p>
             <p>   Near Cheer Ghar.</p>
            <p>Damoh,(M.P)</p>
            </div>
          
          </div>
          <div className="phone">
            <h4>
            <FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} /> 7987415598,8982034020
            </h4>
         
           
         
          </div>
          <div className="email">
            <h4>
            <FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} /> s8982034020@gmail.com
            </h4>
            </div>
        </div>

        <div className="right">
            <h4>About me</h4>
            <p>I am React Js Developer.</p>
            <div className="social">
              <a href="https://github.com/Shubhhammmm" target="_blank">
            <FaGithub  size={30} style={{ color: "#fff", marginRight: "1rem" }} />
            </a>
            
            <a href="https://www.linkedin.com/in/shubham-shrivastava-717931140/" target="_blank">
            <FaLinkedinIn size={30} style={{ color: "#fff", marginRight: "1rem" }} />
            </a>
            
            <FaInstagram size={30} style={{ color: "#fff", marginRight: "1rem" }} />

            <FaFacebook size={30} style={{ color: "#fff", marginRight: "1rem" }} />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
