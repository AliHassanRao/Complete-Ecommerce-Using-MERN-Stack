import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./CSS/Login.css";
import Header from "../components/layout/Headers/Header";
import Footer from "../components/layout/Footer";
import axios from "axios";
const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [answer, setAnswer] = useState("");
  const [newpassword, setNewpassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      let responce = await axios.post(
        "http://localhost:5000/user/forgotpassword",
        {
          email,
          answer,
          newpassword,
        }
      );
      console.log(responce.data);
      if (responce.data.success) {
        alert("Password Reset successfully");
      }
      navigate("/login");
    } catch (err) {
      console.log("Error While SignUp", err);
    }
  };

  return (
    <>
      <Header />
      <div className="login-outer-container-top">
        <div className="login-outer-container">
          <div className="login-container">
            <div className="login-page">
              <h1>Forgot Password</h1>

              <form onSubmit={handleSubmit}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  required
                  placeholder="Enter Email"
                />
                <input
                  type="text"
                  value={answer}
                  onChange={(e) => {
                    setAnswer(e.target.value);
                  }}
                  required
                  placeholder="Your's Favourt Sport"
                />
                <input
                  type="password"
                  value={newpassword}
                  onChange={(e) => {
                    setNewpassword(e.target.value);
                  }}
                  required
                  placeholder="Enter New Password"
                />
                <button>Reset Password</button>
              </form>
              <p>
                If Already have an account <Link to="/login">Login</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ForgotPassword;
