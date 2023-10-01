import React from "react";
import "./Footer.scss";
import CopyrightIcon from "@mui/icons-material/Copyright";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            lacinia ante ipsum, et tempor nibh faucibus et. Donec pretium nunc
            quam, at egestas libero lobortis et.
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            lacinia ante ipsum, et tempor nibh faucibus et. Donec pretium nunc
            quam, at egestas libero lobortis et.
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">Bharatstore</span>
          <span className="copyright">
            <CopyrightIcon />
            <span>Copyright 2023. All Rights Reserved</span>
          </span>
        </div>
        <div className="right">
          <img src="/images/footer.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
