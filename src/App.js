import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import SubCetegory from "./components/subCategory/SubCategory";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/subcatagory" element={<SubCetegory />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
