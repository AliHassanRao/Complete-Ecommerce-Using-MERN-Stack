import React from 'react';
import {Link}   from 'react-router-dom'
import add_product from '../../components/Asserts/cart_icon.png';
import list_product from '../../components/Asserts/logo.png';
import './CSS/SideBar.css';

const SideBar = () => {
  return (
    <div className="side-bar-container">
      <div className="add-product">
        <img src={add_product} alt="" />
        <Link to='/admin/addproduct'><p>Add Product</p></Link>
      </div>
      <div className="list-product">
        <img src={list_product} alt="" />
        <p><Link to ="/admin/allproduct">All Products</Link></p>
      </div>
    </div>
  );
};

export default SideBar;
