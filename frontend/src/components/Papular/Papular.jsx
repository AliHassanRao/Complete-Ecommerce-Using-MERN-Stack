import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Papular.css";
import { Link } from "react-router-dom";
const Papular = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/product/papular-in-women"
        );
        setProducts(response.data.getAllProduct);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <div className="papular">
        <div className="papular-menu">
          <div className="heading">
            <h1>PAPULAR IN WOMEN</h1>
          </div>
          <div className="men-products">
            {products.map((product) => (
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

export default Papular;
