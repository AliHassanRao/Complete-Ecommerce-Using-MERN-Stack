import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import SideBar from "./SideBar";
import AdminNav from "./AdminNav";
import "./CSS/AllProduct.css";
import Header from "../../components/layout/Headers/Header";

const AllProduct = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/product/all-products"
      );
      setProducts(response.data.getAllProduct);
    } catch (err) {
      alert(err.message);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
    <Header/>
      <AdminNav />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2">
            <SideBar />
          </div>
          <div className="col-md-10">
            {products.map((product) => (
              <Link to={`/admin/singleproduct/${product._id}`} key={product.id}>
                <div className="cart">
                  <img src={product.images[0]} alt="" />
                  <p>{product.description}</p>
                  <div className="papular-price">
                    <h3>${product.price}</h3>
                    <h3>${product.offerPrice}</h3>
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

export default AllProduct;
