import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="footer bg-dark text-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <h5>About Us</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                nec nulla auctor, consectetur libero ac, tempor mi.
              </p>
            </div>
            <div className="col-lg-4">
              <h5>Contact Us</h5>
              <ul className="list-unstyled">
                <li>Email: example@example.com</li>
                <li>Phone: 123-456-7890</li>
                <li>
                  Address: <address>123 Main St, City, Country</address>
                </li>
              </ul>
            </div>
            <div className="col-lg-4">
              <h5>Follow Us</h5>
              <ul className="list-unstyled">
                <li>
                  <Link to="/" aria-label="Facebook">
                    Facebook
                  </Link>
                </li>
                <li>
                  <Link to="/" aria-label="Twitter">
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link to="/" aria-label="Instagram">
                    Instagram
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-lg-12 text-center">
              <p>© 2024 Your Company. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
