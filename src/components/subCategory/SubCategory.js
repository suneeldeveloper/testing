import React,{useState} from "react";
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import Footer from "../footer/Footer";
import "./Subcatagory.css";
import Cleaning from "../../assets/Cleaning_categories.png";
import Construction from "../../assets/Construction_categories .png";
import Transport from "../../assets/Transport_categories.png";
import Tradesman from "../../assets/TRADESMAN_categories.png";
import Babysitting from "../../assets/Babysitting_categories.png";
import Other from "../../assets/Other_categories.png";
import Health from "../../assets/Health_categories.png";
import Resturants from "../../assets/Transport_categories.png";
import Hotals from "../../assets/HOTELS AND B&B_categories.png";

// slider_images
import Image1 from '../../assets/slider1.jpg'
import Image2 from '../../assets/slider2.jpg'
import Image3 from '../../assets/slider1.jpg'
import Image4 from '../../assets/slider2.jpg'

const SubCategory = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [allImages, setAllImages] = useState([Image1, Image2, Image3, Image4])

  return (
    <div>
      <Header />
      <Navbar />

      <div className="subCategory">
        <div className="sub_cetegories">
          <div className="subcetegory_header">
            <h2 className="subcetegory_header_title">Sub categories</h2>
            <div className="right_side">
              <p>Filters</p>
              <button>Reset All</button>
            </div>
          </div>
          <div className="filters_images">
              <img src={Cleaning} alt="" />
              <img src={Construction} alt="" />
              <img src={Transport} alt="" />
              <img src={Tradesman} alt="" />
              <img src={Babysitting} alt="" />
              <img src={Other} alt="" />
              <img src={Health} alt="" />
              <img src={Resturants} alt="" />
              <img src={Hotals} alt="" />

            {/* <div className="filter_img">
              <img src={Construction} alt="" />
              <img src={Construction} alt="" />
            </div>
            <div className="filter_img">
              <img src={Transport} alt="" />
              <img src={Tradesman} alt="" />
            </div>
            <div className="filter_img">
              <img src={Babysitting} alt="" />
              <img src={Other} alt="" />
            </div> */}
          </div>
          <div className="filtering">
            <div className="filtering_box">
              <label>Country</label>
              <select>
                <option>Country</option>
                <option>Country</option>
                <option>Country</option>
                <option>Country</option>
                <option>Country</option>
              </select>
            </div>
            <div className="filtering_box">
              <label>Location</label>
              <select>
                <option>Select state</option>
                <option>Pakistan</option>
                <option>USA</option>
                <option>India</option>
                <option>New Yark</option>
              </select>
            </div>
            <div className="filtering_box">
              <label>Price</label>
              <div className="price_cetegory">
                <select>
                  <option>From</option>
                  <option>$10</option>
                  <option>$10</option>
                  <option>$10</option>
                  <option>$10</option>
                </select>
                <select className="from_input">
                  <option>To</option>
                  <option>$10</option>
                  <option>$10</option>
                  <option>$10</option>
                  <option>$10</option>
                </select>
              </div>
            </div>
            <div className="filtering_box">
              <button>Search</button>
            </div>
          </div>
        </div>
        <div className="subCetegory_slider">
          <p className="slider_title">No product found in this category</p>
          <div className="slider">
            <div className="slider_buttons">
            <i className="fa-solid fa-arrow-left right_button"  onClick={() => { if(selectedImage > 0)setSelectedImage(selectedImage - 1)}}></i>
            <i className="fa-solid fa-arrow-right next_button" onClick={() => { if(selectedImage < allImages.length -1)setSelectedImage(selectedImage + 1)}}></i>
            </div>
            <div className="slider_images">
              <img src={allImages[selectedImage]} alt="" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SubCategory;
