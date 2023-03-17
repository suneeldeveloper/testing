import React from 'react'
import HeaderLogo from "../../assets/headerlogo.png";
import './Header.css'


const Header = () => {
  return (
    <div>
        <div className="header">
        <div className="social_links">
          <div className="icons">
            <i class="fa-brands fa-facebook-f"></i>
          </div>
          <div className="icons">
            <i class="fa-brands fa-instagram"></i>
          </div>
          <div className="icons">
            <i class="fa-brands fa-linkedin-in"></i>
          </div>
          <div className="icons">
            <i class="fa-brands fa-twitter"></i>
          </div>
        </div>

        <div className="contact">
          <img src={HeaderLogo} alt="HeaderLogo" className="headerLogo" />

          <div className="contact_details">
            <i className="fa-solid fa-envelope"></i>
            <p className="cell_number">example@xyz.com</p>
          </div>
          <div className="contact_details">
            <i className="fa-solid fa-phone"></i>
            <p className="cell_number">+333 22 111 0000</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header