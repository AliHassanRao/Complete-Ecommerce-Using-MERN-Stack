import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "./CSS/Login.css";
import Header from "../components/layout/Headers/Header";
import Footer from "../components/layout/Footer";
import axios from "axios";
import { useAuth } from "../components/context/UserContext";

const Login = () => {
  const navigate=useNavigate();
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
const [auth, setAuth] = useAuth()
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/user/login", {
        email,
        password,
      });
      if (res && res.data.success) {
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));
    navigate('/')
      } else {
        
      }
    } catch (error) {
      console.log(error);
  
    }
  };

  return (
    <>
      <Header />
      <div className="login-outer-container-top">
        <div className="login-outer-container">
          <div className="login-container">
            <div className="login-page">
              <h1>Login</h1>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  placeholder="Enter Email"
                />
                <input
                  type="password"
                  value={password}
                  placeholder="Enter Password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />

                <Link to="/forgotpassword" className="forgot">
                  Forgot Password
                </Link>

                <button type="submit">Login</button>
              </form>

              <p>
                If you don't have an account <Link to="/signup">SignUp</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
