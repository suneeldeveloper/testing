import React from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <>
      <div className="main_header">
        <h1 className="logo">Logo</h1>
        <i class="fa-solid fa-bars toggle" onClick={toggleDrawer}></i>
        <div className="header_group">
          <div className="search_icon">
            <i className="fa-solid fa-magnifying-glass"></i>
            <p>Search</p>
          </div>
          <p className="login_text">Login</p>
          <p className="login_text">Signup</p>
          <button className="ad_button">Place Ad</button>
        </div>
      </div>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="right"
        className="bla bla bla responsive"
      >
        <div className="header_group">
          <div className="search_icon">
            <i className="fa-solid fa-magnifying-glass"></i>
            <p>Search</p>
          </div>
          <p className="login_text">Login</p>
          <p className="login_text">Signup</p>
          <button className="ad_button">Place Ad</button>
        </div>
      </Drawer>
    </>
  );
};

export default Navbar;
