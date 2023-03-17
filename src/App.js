import React from "react";
import "./App.css";

import Footer from "./components/footer/Footer";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/main/Main";
import Cetegory from "./components/cetegory/Cetegory";
import Product from "./components/products/Product";

const App = () => {
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

export default App;
