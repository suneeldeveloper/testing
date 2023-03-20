import React from "react";
import "../../App.css";

import Footer from "../footer/Footer";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import Main from "../main/Main";
import Cetegory from "../cetegory/Cetegory";
import Product from "../products/Product";

const Home = () => {
  return (
    <>
      <Header />

      <Navbar />

      <Main />

      <Cetegory />

      <Product />

      <Footer />
    </>
  );
};

export default Home;
