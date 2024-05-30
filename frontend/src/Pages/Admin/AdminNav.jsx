import React from "react";
import admin from "../../components/Asserts/admin.png";

import "./CSS/AdminNav.css";
const AdminNav = () => {
  return (
    <>
      <div className="admin-nav">
        <div className="admin-logo">
          <img src={admin} alt="" />
          <div className="admin-name">
            <p>Admin Dashboard</p>
          </div>
        </div>
      
      </div>
    </>
  );
};

export default AdminNav;
