import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/layout/Headers/Header";
import Footer from "../components/layout/Footer";
import product1 from "../components/Asserts/banner_women.png";
import "./CSS/Men.css";
import { Link } from "react-router-dom";

const Women = () => {
  const [women, setWomen] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(1);

  useEffect(() => {
    const getWomenData = async () => {
      try {
        const response = await axios.post(
          `http://localhost:5000/product/women`,{loading:loading}
        );
        console.log(loading)
        setWomen(response.data.getAllProduct);
      } catch (error) {
        console.error("Error fetching women's products:", error);
        setError(
          "An error occurred while fetching products. Please try again later."
        );
      }
    };

    getWomenData();
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
          <button>Sort by </button>
        </div>
        <div className="men-products">
          {error ? (
            <div className="error-message">{error}</div>
          ) : (
            women.map((product, index) => (
              <Link to={`/product/${product._id}`}>
              <div className="cart">
                <img src={product.images[0]} alt="" />
                <p>{product.description}</p>
                <div className="popular-price">
                  <h6 className="price">$ {product.offerPrice}</h6>
                  <h6 className="offer-price">$ {product.price}</h6>
                </div>
              </div>
            </Link>
            ))
          )}
        </div>
        <div className="men-button">
          <button value={loading} onClick={(e)=>{setLoading(loading+1)}} >Explore More</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Women;
