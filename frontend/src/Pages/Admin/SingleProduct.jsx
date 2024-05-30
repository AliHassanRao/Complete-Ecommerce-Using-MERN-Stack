import React, { useEffect, useState } from "react";
import "./CSS/SingleProduct.css";
import axios from "axios";
import AdminNav from "./AdminNav";
import { useParams, useNavigate } from "react-router-dom";

const SingleProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    offerPrice: "",
    category: "",
    images: "",
  });

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/product/singleproduct/${id}`
        );
        setProduct(response.data.singleProduct);
      } catch (err) {
        console.error("Error fetching product:", err);
      }
    };

    fetchProduct();
  }, [id]);

  const handleImage = async (e) => {
    try {
      const formData = new FormData();
      formData.append("product", e.target.files[0]);
      const response = await axios.post(
        "http://localhost:5000/upload",
        formData
      );
      setProduct({ ...product, images: response.data.image_url });
    } catch (err) {
      console.error("Error uploading image:", err);
    }
  };

  const handleUpdate = async () => {
    try {
      const response = await axios.put(
        `http://localhost:5000/product/singleproduct/${id}`,
        product
      );

      if (response.data.success) {
        alert("Product updated successfully");
        navigate("/admin/allproduct");
      } else {
        alert(response.data.message);
      }
    } catch (err) {
      console.error("Error updating product:", err);
    }
  };

  const handleDelete = async () => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/product/singleproduct/${id}`
      );
      if (response.data.success) {
        alert("Product deleted successfully");
        navigate("/admin/allproduct");
      } else {
        alert(response.data.message);
      }
    } catch (err) {
      console.error("Error deleting product:", err);
    }
  };

  return (
    <>
      <AdminNav />
      <div className="single-product-container">
        <div className="single-product-left">
          <img src={product.images[0]} alt="" />
          <input type="file" onChange={handleImage} accept="image/*" />
        </div>
        <div className="single-product-right">
          <div className="name">
            <h3>Name</h3>
            <input
              type="text"
              value={product.name}
              onChange={(e) => setProduct({ ...product, name: e.target.value })}
            />
          </div>
          <div className="price">
            <h3>Price</h3>
            <input
              type="text"
              value={product.price}
              onChange={(e) =>
                setProduct({ ...product, price: e.target.value })
              }
            />
          </div>
          <div className="offer-price">
            <h3>Offer Price</h3>
            <input
              type="text"
              value={product.offerPrice}
              onChange={(e) =>
                setProduct({ ...product, offerPrice: e.target.value })
              }
            />
          </div>
          <div className="description">
            <h3>Description</h3>
            <input
              type="text"
              value={product.description}
              onChange={(e) =>
                setProduct({ ...product, description: e.target.value })
              }
            />
          </div>
          <div className="category">
            <h3>Category</h3>
            <select
              value={product.category}
              onChange={(e) =>
                setProduct({ ...product, category: e.target.value })
              }
            >
              <option value="Kids">Kids</option>
              <option value="Men">Men</option>
              <option value="Women">Women</option>
            </select>
          </div>
          <div className="update-delete-product">
            <button onClick={handleUpdate}>Update Product</button>
            <button onClick={handleDelete}>Delete Product</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
