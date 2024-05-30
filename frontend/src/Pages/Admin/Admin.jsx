import React from "react";
import AdminNav from "./AdminNav";
import SideBar from "./SideBar";
import { useAuth } from "../../components/context/UserContext";
import Header from "../../components/layout/Headers/Header";
const Admin = (  {children}) => {
    const [auth] = useAuth();
    console.log(auth);
  return (
     <>
   <Header/>
     <AdminNav/>
      <div className="container-fluid">
        <div className="row">
          <div className="col-3">
            <SideBar />
          </div>
          <div className="col-3">
            <div className="card ">
              <h3> Admin Name</h3>
              <h3> Admin Email </h3>
              <h3> Admin Contact </h3>
            </div>
          </div>
        </div>
      </div>
    </>
    
  );
};

export default Admin;
