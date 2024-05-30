import React, { useEffect, useState } from "react";
import "./UserSinglePage.css";
import Header from "../../../components/layout/Headers/Header";
import axios from "axios";
import left from "../../../components/Asserts/left.png";
import right from "../../../components/Asserts/right.png";
import { useParams } from "react-router-dom";
import RelatedProducts from "../../../components/RelatedProducts/RelatedProducts";
import Footer from "../../../components/layout/Footer";

const UserSinglePage = () => {
  const [product, setProduct] = useState({});
  const [imageValue, setImageValue] = useState(0);
  const { id } = useParams();

  const getProduct = async () => {
    try {
      let response = await axios.get(`http://localhost:5000/product/${id}`);
      setProduct(response.data.singleProduct);
      console.log(response.data.singleProduct); // Log the response directly
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProduct();
  }, [id]); // Fetch product when id changes

  return (
    <>
      <Header />
      <div className="single-page-container">
        <div className="single-page-left">
          <div className="single-image">
            {product && product.images && product.images[0] && (
              <div className="image-container">
                <img
                  onClick={() =>
                    setImageValue((prevValue) =>
                      prevValue < product.images.length - 1 ? prevValue + 1 : 0
                    )
                  }
                  src={left}
                  className="fas fa-arrow-left arrow-icon"
                  alt="Left Arrow"
                />
                <img src={product.images[imageValue]} alt="" />
                <img
                  onClick={() =>
                    setImageValue((prevValue) =>
                      prevValue > 0 ? prevValue - 1 : product.images.length - 1
                    )
                  }
                  src={right}
                  className="fas fa-arrow-right arrow-icon"
                  alt="Right Arrow"
                />
              </div>
            )}
          </div>

          <div className="multiple-images">
            {product &&
              product.images &&
              product.images
                .slice(1, 5)
                .map((image, index) => <img  key={index} src={image} alt="" />)}
          </div>
        </div>
        <div className="single-page-right">
          <div className="colors">
            <h3>Colors</h3>
            <div className="colors-list">
              <div className="first-color"></div>
              <div className="second-color"></div>
            </div>
          </div>

          <div className="shoe-sizes">
            <button>S</button>
            <button>M</button>
            <button>L</button>
            <button>XL</button>
            <button>2XL</button>
            <button>3XL</button>
          </div>
          <div className="add-to-cart">
            <button>Add To Cart</button>
          </div>
        </div>
      </div>
      <RelatedProducts category={product.category} />
      <Footer/>
    </>
  );
};

export default UserSinglePage;
