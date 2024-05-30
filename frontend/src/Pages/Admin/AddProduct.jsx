import React, { useState } from "react";
import "./CSS/AddProduct.css";
import AdminNav from "./AdminNav";
import SideBar from "./SideBar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "../../components/layout/Headers/Header";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [offerPrice, setOfferPrice] = useState("");
  const [category, setCategory] = useState("kid");
  const [images, setImages] = useState([]);
  const navigate = useNavigate();

  const handleImage = async (e) => {
    try {
      const formData = new FormData();
      for (let i = 0; i < e.target.files.length; i++) {
        formData.append("product", e.target.files[i]);
      }

      const response = await axios.post(
        "http://localhost:5000/upload",
        formData
      );
      const urls = response.data.image_urls;
      setImages(urls);
    } catch (error) {
      console.log("Error uploading images:", error);
    }
  };

  const handleSubmit = async () => {
    try {
      if (!name || !description || !price || !category || images.length === 0) {
        throw new Error(
          "Please fill in all required fields and upload at least one image."
        );
      }

      const response = await axios.post(
        "http://localhost:5000/product/create-product",
        {
          name,
          description,
          price,
          offerPrice,
          category,
          images,
        }
      );

      if (response.data.success) {
        console.log(response.data.product);
        alert("Product Added");
        // navigate("/admin/allproduct");
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.log("Error adding product:", error);
    }
  };

  return (
    <>
      <Header />
      <AdminNav />
      <div className="container-fluid">
        <div className="row">
          <div className="col-2">
            <SideBar />
          </div>
          <div className="col-2 ">
            <h1>Add Product</h1>
            <div className="add-product-page">
              <div className="add-product-container">
                <div className="left">
                  {images.map((imageUrl, index) => (
                    <img key={index} src={imageUrl} alt={`Uploaded ${index}`} />
                  ))}
                  <input
                    type="file"
                    onChange={handleImage}
                    accept="image/*"
                    multiple
                  />
                </div>
                <div className="right">
                  <p>Name</p>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <p>Description</p>
                  <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                  <p>Price</p>
                  <input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                  <p>Offer Price</p>
                  <input
                    type="number"
                    value={offerPrice}
                    onChange={(e) => setOfferPrice(e.target.value)}
                  />
                  <p>Product Category</p>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    <option value="kid">Kid</option>
                    <option value="men">Men</option>
                    <option value="women">Women</option>
                  </select>
                  <button onClick={handleSubmit}>Add Product</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
