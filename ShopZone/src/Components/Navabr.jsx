import React from "react";
import { Link } from "react-router-dom";

const Navabr = () => {
  return (
    <>
    {/* Navbar Section */}
      <div id="header">
        <Link to="/">
          <img
            src="images-removebg-preview.png"
            className="logo"
            alt="logo"
          />
        </Link>

        <div>
          <ul id="navbar">
            <li>
              <Link className="active" to="/">Home</Link>
            </li>
            <li>
              <Link to="/About.jsx">About</Link>
            </li>
            <li>
              <Link to="/Shop.jsx">Shop</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/cart">
                <i className="fa-solid fa-cart-shopping"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>

    {/* Home Section */}
      <section id="hero">
        <div className="hero-text">
          <h4>Trade-in-offer</h4>
          <h2>You dream big</h2>
          <h1>Shop Smart</h1>
          <p>Save more with coupons & up to 70% Off!</p>

          <Link to="/shop">
            <button>Shop Now</button>
          </Link>
        </div>

        <div className="hero-image">
          <img src="home-page.png" alt="hero" />
        </div>
      </section>
    </>
  );
};

export default Navabr;
