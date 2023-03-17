import React from 'react'
import './Cetegory.css'

import Services from "../../assets/Services.png";
import Cars from "../../assets/Cars.png";
import Home from "../../assets/Home.png";
import Clothes from "../../assets/Clothes.png";
import Garden from "../../assets/Garden.png";
import Farming from "../../assets/Farming.png";
import Electronics from "../../assets/Electronic.png";
import Sport from "../../assets/sport.png";
import Hobbeis from "../../assets/Hobbies.png";
import Pets from "../../assets/Pets.png";
import Healthcare from "../../assets/Healthcare_categories.png";
import KidsStuff from "../../assets/Kids.png";
import Wedding from "../../assets/Wedding_categories.png";
import Books from "../../assets/Books_categories .png";
import Antiques from "../../assets/ANTIQUES_categories.png";
import Art from "../../assets/Art_categories .png";
import Property from "../../assets/PROPERTY_categories.png";
import Construction from "../../assets/CONSTRUCTION_categories.png";
import Tickets from "../../assets/TICKETS_categories.png";
import Office from "../../assets/OFFICE_categories.png";

const Cetegory = () => {
  return (
    <>
     <div className="cetegory">
        <span className="heading">Buy and Sell Locally In Ireland</span>

        <div className="cetegory_box">
          <img src={Services} alt="" className="cetegory_image" />
          <img src={Cars} alt="" className="cetegory_image" />
          <img src={Home} alt="" className="cetegory_image" />
          <img src={Clothes} alt="" className="cetegory_image" />
          <img src={Garden} alt="" className="cetegory_image" />
          <img src={Farming} alt="" className="cetegory_image" />
          <img src={Electronics} alt="" className="cetegory_image" />
          <img src={Sport} alt="" className="cetegory_image" />
          <img src={Hobbeis} alt="" className="cetegory_image" />
          <img src={Pets} alt="" className="cetegory_image" />
          <img src={Healthcare} alt="" className="cetegory_image" />
          <img src={KidsStuff} alt="" className="cetegory_image" />
          <img src={Wedding} alt="" className="cetegory_image" />
          <img src={Books} alt="" className="cetegory_image" />
          <img src={Antiques} alt="" className="cetegory_image" />
          <img src={Art} alt="" className="cetegory_image" />
          <img src={Property} alt="" className="cetegory_image" />
          <img src={Construction} alt="" className="cetegory_image" />
          <img src={Tickets} alt="" className="cetegory_image" />
          <img src={Office} alt="" className="cetegory_image" />
        </div>
      </div>
    </>
  )
}

export default Cetegory