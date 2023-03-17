import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="footer_box box1">
          <p className="footer_title">JOIN OUR MAILING LIST</p>
          <input type="text" placeholder="Name"  className="footer_input"/>
          <input type="text" placeholder="Email Address" className="footer_input" />
          <button className="footer_btn">Send</button>
        </div>
        <div className="footer_box">
          <h2 className="box_title">our Locations</h2>
          <ul>
            <li>Toronto</li>
            <li>Calgary</li>
            <li>Montreal </li>
            <li>Edmonton </li>
            <li>Vancouver </li>
            <li>Markham </li>
            <li>Mississauga </li>
            <li>Ottawa </li>
          </ul>
        </div>

        <div className="footer_box">
          <h2 className="box_title">ABOUT US</h2>
          <ul>
            <li>Our Story</li>
            <li>Blogs & Articles</li>
            <li>Careers </li>
          </ul>
        </div>

        <div className="footer_box">
          <h2 className="box_title">Example 01</h2>
          <ul>
            <li>Lorem ipsum </li>
            <li>Lorem ipsum </li>
            <li>Lorem ipsum </li>
            <li>Lorem ipsum </li>
            <li>Lorem ipsum </li>
            <li>Lorem ipsum </li>
            <li>Lorem ipsum </li>
          </ul>
        </div>

        <div className="footer_box">
          <h2 className="box_title">Example 02</h2>
          <ul>
            <li>Lorem ipsum </li>
            <li>Lorem ipsum </li>
            <li>Lorem ipsum </li>
            <li>Lorem ipsum </li>
            <li>Lorem ipsum </li>
            <li>Lorem ipsum </li>
            <li>Lorem ipsum </li>
            <li>Lorem ipsum </li>
            <li>Lorem ipsum </li>
          </ul>
        </div>

        <div className="footer_box">
          <h2 className="box_title">HELP</h2>
          <ul>
            <li>Call Us </li>
            <li>Email Us </li>
          </ul>
        </div>

        <div className="footer_box">
          <h2 className="box_title">OTHER</h2>
          <ul>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Cookies Policy</li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
