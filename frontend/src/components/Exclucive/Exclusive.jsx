import React from "react";
import "./Exclusive.css";
import product1 from "../Asserts/exclusive_image.png";

const Exclusive = () => {
  return (
    <>
      <div className="exclusive-container">
        <div className="exclusive-left">
          <h1>Exclusive</h1>
          <h1>Offers For</h1>
          <h1>You</h1>
          <p>ONLY ON BEST SELLERS PRODUCTS</p>
          <button>Check Now</button>
        </div>
        <div className="exclusive-right">
        <img src={product1} alt="" />
        </div>

       
      </div>
    </>
  );
};

export default Exclusive;
