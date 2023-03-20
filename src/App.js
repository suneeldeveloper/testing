import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import SubCategory from "./components/subCategory/SubCategory";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/subcategory" element={<SubCategory />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
