import React, { useEffect, useState } from "react";
import axios from "axios";
import "./NewCollection.css";
import { Link } from "react-router-dom";
const NewCollection = () => {
  const [newProducts, setNewProducts] = useState([]);

  useEffect(() => {
    const getNewPoducts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/product/new-product"
        );
        setNewProducts(response.data.getAllProduct);
      } catch (error) {
        console.error("Error fetching men's products:", error);
      }
    };

    getNewPoducts();
  }, []);
  return (
    <>
      <div className="papular">
        <div className="papular-menu">
          <div className="heading">
            <h1>NEW COLLECTIONS</h1>
          </div>
          <div className="men-products">
            {newProducts.map((product) => (
              <Link to={`/product/${product._id}`}>
                <div className="cart">
                  <img src={product.images[0]} alt="" />
                  <p>{product.description}</p>
                  <div className="papular-price">
                    <h6 className="offer-price">$ {product.offerPrice}</h6>
                    <h6 className="price">$ {product.price}</h6>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default NewCollection;
