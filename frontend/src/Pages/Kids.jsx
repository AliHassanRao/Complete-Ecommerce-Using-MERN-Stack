import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/layout/Headers/Header";
import Footer from "../components/layout/Footer";
import product1 from "../components/Asserts/banner_kids.png";
import { Link } from "react-router-dom";
import "./CSS/Men.css";

const Kids = () => {
  const [kids, setKids] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(1);
  useEffect(() => {
    const getKidsData = async () => {
      try {
        const response = await axios.post(
        `http://localhost:5000/product/kids`,{loading:loading}
        );
        setKids(response.data.getAllProduct);
      } catch (error) {
        console.error("Error fetching kids' products:", error);
        setError(
          "An error occurred while fetching products. Please try again later."
        );
      }
    };

    getKidsData();
  }, [loading]);

  return (
    <>
      <Header />

      <div className="men-container">
        <div className="men-banner">
          <img src={product1} alt="" />
        </div>
        <div className="men-Showing">
          <p>Showing 1-10 out of 36 products</p>
          <button>Sort by</button>
        </div>
        <div className="men-products">
          {error ? (
            <div className="error-message">{error}</div>
          ) : (
            kids.map((product, index) => (
              <Link to={`/product/${product._id}`}>
              <div className="cart" key={index}>
                <img src={product.images[0]} alt="" />
                <p>{product.description}</p>
                <div className="papular-price">
                  <h6 className="offere-price">$ {product.offerPrice}</h6>
                  <h6 className="price">$ {product.price}</h6>
                </div>
              </div>
              </Link>
            ))
          )}
        </div>
        <div className="men-button">
          <button value={loading} onClick={(e)=>{setLoading(loading+1)}}>Explore More</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Kids;
