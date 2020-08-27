import React from "react";
import "./Navbar.css";

import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header>
      <div className="brand-logo">
        <Link to="/">
          <img
            src="https://www.uiuxstream.com/images/white-logo-icon.png"
            alt="Brand Logo"
          />
        </Link>
      </div>

      <input type="checkbox" id="toggle-btn" />
      <label htmlFor="toggle-btn" className="show-menu-btn">
        <i className="fas fa-bars"></i>O
      </label>
      <nav>
        <ul className="navigation">
          <li>
            <Link to="/">
              <i className="fas fa-house-damage"></i> Men
            </Link>
            <ul className="dropdown">
              <h6>Topwear</h6>
              <hr />
              <li>
                <Link to="/men-casual-shirts">Casual Shirts</Link>
              </li>
              <li>
                <Link to="/men-formal-shirts">Formal Shirts</Link>
              </li>
              <li>
                <Link to="/men-kurtas">Kurtas</Link>
              </li>
              <li>
                <Link to="/men-tshirts">T-shirts</Link>
              </li>
              <h6>Bottomwear</h6>
              <hr />
              <li>
                <Link to="/men-casual-trousers">Casual Trousers</Link>
              </li>
              <li>
                <Link to="/men-formal-trousers">Formal Trousers</Link>
              </li>
              <li>
                <Link to="/men-jeans">Jeans</Link>
              </li>
              <h6>Footwear</h6>
              <hr />
              <li>
                <Link to="/men-casual-shoes">Casual shoes</Link>
              </li>
              <li>
                <Link to="/men-sports-shoes">Sports shoes</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/">
              <i className="far fa-image"></i> Women
            </Link>
            <ul className="dropdown">
              <h6>Indian</h6>
              <hr />
              <li>
                <Link to="/ethnic-tops">Ethnic Tops</Link>
              </li>
              <li>
                <Link to="/ethnic-wear-dresses-menu">Ethnic Dresses</Link>
              </li>
              <li>
                <Link to="/saree">Saree</Link>
              </li>
              <li>
                <Link to="/women-kurtas-kurtis-suits">Kurtas/Suits</Link>
              </li>
              <h6>Western wear</h6>
              <hr />
              <li>
                <Link to="/western-wear-dresses-menu">Dresses</Link>
              </li>
              <li>
                <Link to="/women-jeans-jeggings">Jeans</Link>
              </li>
              <li>
                <Link to="/women-shirts-tops-tees">Shirts/Tees</Link>
              </li>
              <h6>Footwear</h6>
              <hr />
              <li>
                <Link to="/flats">Flats</Link>
              </li>
              <li>
                <Link to="/women-casual-shoes">Casual shoes</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/">
              <i className="fas fa-question"></i> Essentials
            </Link>
            <ul className="dropdown">
              <li>
                <Link to="/haircare">Haircare</Link>
              </li>
              <li>
                <Link to="/men-grooming">Men grooming</Link>
              </li>
              <li>
                <Link to="/skincare">Skincare</Link>
              </li>
            </ul>
          </li>

          <label htmlFor="toggle-btn" className="hide-menu-btn">
            <i className="fas fa-times"></i>x
          </label>
        </ul>
        <ul className="navigation right">
          <li>
            <Link to="/">
              <i className="fas fa-user"></i> Profile
            </Link>
            <ul className="dropdown">
              <li>
                <Link to="/">Laptops</Link>
              </li>
              <li>
                <Link to="/">Monitors</Link>
              </li>
              <li>
                <Link to="/">Printers</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/">Wishlist</Link>
          </li>
          <li>
            <Link to="/">Bag</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
