import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <header>
      <div className="brand-logo">
        <a href="#">
          <img
            src="https://www.uiuxstream.com/images/white-logo-icon.png"
            alt="Brand Logo"
          />
        </a>
      </div>

      <input type="checkbox" id="toggle-btn" />
      <label htmlFor="toggle-btn" className="show-menu-btn">
        <i className="fas fa-bars"></i>O
      </label>
      <nav>
        <ul className="navigation">
          <li>
            <a href="#">
              <i className="fas fa-house-damage"></i> Men
            </a>
          </li>
          <li>
            <a href="#">
              <i className="far fa-image"></i> Women
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-blogger-b"></i> Kids
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-question"></i> Essentials
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-phone-alt"></i> Contact Us
            </a>
          </li>

          <label htmlFor="toggle-btn" className="hide-menu-btn">
            <i className="fas fa-times"></i>x
          </label>
        </ul>
        <ul className="navigation right">
          <li>
            <a href="#">
              <i className="fas fa-user"></i> Profile
            </a>
            <ul className="dropdown">
              <li>
                <a href="#">Laptops</a>
              </li>
              <li>
                <a href="#">Monitors</a>
              </li>
              <li>
                <a href="#">Printers</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">Wishlist</a>
          </li>
          <li>
            <a href="#">Bag</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
