import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const RelatedProducts = ({category}) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.post(
          "http://localhost:5000/product/related-products",{category:category}
        );
        setProducts(response.data.getAllProduct);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchProducts();
  },  [category]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <div className="papular">
        <div className="papular-menu">
          <div className="heading">
            <h1>Related Products</h1>
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

export default RelatedProducts;
