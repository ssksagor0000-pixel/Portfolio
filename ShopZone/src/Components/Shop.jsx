import React from 'react'
import { Link } from "react-router-dom";

const Shop = () => {
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
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
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




      {/*News Letters Section */}
      <section id='newsletter' className='section-p1'>
    <div className="newstext">
        <h4>Sign Up For Newsletters</h4>
        <p>Get E-mail updates about our latest shop and <span>special offers.</span> </p>
    </div>
    <div className="form">
        <input type="text" placeholder='Enter Email Address' />
        <button className='normal'>Sign Up</button>
    </div>
    </section>


    {/*Footer Section */}
    <footer className='section-p1'>
      <div className="col">
        <img src="images-removebg-preview.png" className='logo' alt="" />
        <h4>Contact</h4>
        <p><strong>Address:</strong> Kamalganj,Moulvibazar</p>
        <p><strong>Phone:</strong> +08801606405971</p>
        <p><strong>Hours:</strong> 10:00AM - 12:00AM, Mon-Sat</p>
     

      <div className="follow">
        <h4>Follow Us</h4>
        <div className="icon">
          <i className="fab fa-facebook"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-pinterest"></i>
         <i class="fa-brands fa-youtube"></i>
        </div>
      </div>
    </div>

      <div className="col">
        <h4>About</h4>
        <a href="">About Us</a>
        <a href="">Delivery Information</a>
        <a href="">Privacy policy</a>
        <a href="">Terms & Conditions</a>
        <a href="">Contact Us</a>
      </div>

      <div className="col">
        <h4>My Account</h4>
        <a href="">Sign In</a>
        <a href="">View Cart</a>
        <a href="">My Wishlist</a>
        <a href="">Track My Order</a>
        <a href="">Help</a>
      </div>
     

      <div className="col install">
        <h4>Install App</h4>
        <p>From App Store or Google Play</p>
        <div className="row">
         <img src="app store.jpg" alt="" />
         <img src="google play.jpg" alt="" />
        </div>

        <p>Secured Payment Gateways</p>
         <div className="row2">
          <img src="visa.png" alt="" />
          <img src="bkash.png" alt="" />
          <img src="nadag.jpg" alt="" />
          <img src="rocket.jpg" alt="" />
         </div>
      </div>
   
      <div className="copyright">
        <p>© 2026 sagorkartech — React E-Commerce Template. </p>
      </div>
    </footer>
      </>

  )
}

export default Shop
