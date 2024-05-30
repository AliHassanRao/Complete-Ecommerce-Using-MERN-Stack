import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../../context/UserContext";
import logo from "../../Asserts/logo.png";
import cart from "../../Asserts/cart_icon.png";
import icon from "../../Asserts/icon.png";
import "./Header.css";

const Header = () => {
  const [auth, setAuth] = useAuth();
  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
  };

  return (
    <div className="navContainer">
      <div className="nav">
        <div>
          <img src={logo} alt="Logo" />
          <span>SHOPPER</span>
        </div>
        <div className="menu">
          <ul>
            <Link to="/">
              <li>Shop</li>
            </Link>
            <Link to="/men">
              <li>Men</li>
            </Link>
            <Link to="/women">
              <li>Women</li>
            </Link>
            <Link to="/kids">
              <li>Kids</li>
            </Link>
          </ul>
        </div>
        <div className="icons">
          <div className="login">
            {auth?.user ? (
              <>
                <img src={icon} alt="User Icon" />

                {auth?.user?.name}

                <h5>
                  <NavLink className="dashboard" to="/admin">
                    Dashboard
                  </NavLink>
                </h5>
                <h5>
                  <NavLink
                    className="Logout"
                    onClick={handleLogout}
                    to="/login"
                  >
                    Logout
                  </NavLink>
                </h5>
              </>
            ) : (
              <Link to="/login">
                <button>Login</button>
              </Link>
            )}
          </div>
          <div className="cart-logo">
            <img src={cart} alt="Cart" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
