import React from "react";
import handIcon from "../../Asserts/hand_icon.png";
import heroIcon from "../../Asserts/hero_image.png";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero">
        <div className="container">
          <div className="hero-left">
            <div className="hero-left-text">
              <h5>New Arrival only</h5>
              <div className="icon-flex">
                <p>New</p>
                <img src={handIcon} alt="" />
              </div>
              <p>Collection</p>
              <p>for everyone</p>

              <button>Latest Collection</button>
            </div>
          </div>
          <div className="hero-right">
            <img src={heroIcon} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
