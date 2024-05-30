import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/layout/Headers/Header";
import Footer from "../components/layout/Footer";
import product1 from "../components/Asserts/banner_mens.png";
import { Link } from 'react-router-dom';
import "./CSS/Men.css";


const Men = () => {
  const [men, setMen] = useState([]);
  const [loading, setLoading] = useState(1);
  useEffect(() => {
    const getMenData = async () => {
      try {
        const response = await axios.post(
         ' http://localhost:5000/product/men',{loading:loading}
        );
        setMen(response.data.getAllProduct);
      } catch (error) {
        console.error("Error fetching men's products:", error);
      }
    };

    getMenData();
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
          {men.map((product) => (
               <Link to={`/product/${product._id}`}>
               <div className="cart">
                 <img src={product.images[0]} alt="" />
                 <p>{product.description}</p>
                 <div className="popular-price">
                   <h6 className="offer-price">$ {product.offerPrice}</h6>
                   <h6 className="price">$ {product.price}</h6>
                 </div>
               </div>
             </Link>
          ))}
        </div>
        <div className="men-button">
          <button value={loading} onClick={(e)=>{setLoading(loading+1)}}>Explore More</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Men;
