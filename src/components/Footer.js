import React from "react";
import "./Footer.css";
import LogoInstagram from "../images/Instagram_icon.png";
import LogoWhatsapp from "../images/WhatsApp_icon.png";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>Mendoza, Argentina</p>
        <p>&copy;Copyright Uneyge {new Date().getFullYear()}</p>
      </div>
      <div className="container">
        <a href="https://www.instagram.com/uneyge.mza" target="_blank">
          <img src={LogoInstagram} height="40" width="40" alt="" />
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=5492612514920"
          target="_blank"
        >
          <img src={LogoWhatsapp} height="40" width="40" alt="" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
