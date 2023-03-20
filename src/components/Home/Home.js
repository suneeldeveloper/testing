import React from "react";
import "../../App.css";
import { Link } from "react-router-dom";
import Footer from "../footer/Footer";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import Main from "../main/Main";
import Cetegory from "../product_category/product_Category";
import Product from "../products/Product";

const Home = () => {
  return (
    <>
      <Header />

      <Navbar />

      <Main />
      <Link to='/subcategory'>
        <Cetegory />
      </Link>

      <Product />

      <Footer />
    </>
  );
};

export default Home;
