import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <header>
      <div className="brand-logo">
        <a href="/">
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
            <a href="/">
              <i className="fas fa-house-damage"></i> Men
            </a>
            <ul className="dropdown">
              <h6>Topwear</h6>
              <hr />
              <li>
                <a href="/men-casual-shirts">Casual Shirts</a>
              </li>
              <li>
                <a href="/men-formal-shirts">Formal Shirts</a>
              </li>
              <li>
                <a href="/men-kurtas">Kurtas</a>
              </li>
              <li>
                <a href="/men-tshirts">T-shirts</a>
              </li>
              <h6>Bottomwear</h6>
              <hr />
              <li>
                <a href="/men-casual-trousers">Casual Trousers</a>
              </li>
              <li>
                <a href="/men-formal-trousers">Formal Trousers</a>
              </li>
              <li>
                <a href="/men-jeans">Jeans</a>
              </li>
              <h6>Footwear</h6>
              <hr />
              <li>
                <a href="/men-casual-shoes">Casual shoes</a>
              </li>
              <li>
                <a href="/men-sports-shoes">Sports shoes</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="/">
              <i className="far fa-image"></i> Women
            </a>
            <ul className="dropdown">
              <h6>Indian</h6>
              <hr />
              <li>
                <a href="/ethnic-tops">Ethnic Tops</a>
              </li>
              <li>
                <a href="/ethnic-wear-dresses-menu">Ethnic Dresses</a>
              </li>
              <li>
                <a href="/saree">Saree</a>
              </li>
              <li>
                <a href="/women-kurtas-kurtis-suits">Kurtas/Suits</a>
              </li>
              <h6>Western wear</h6>
              <hr />
              <li>
                <a href="/western-wear-dresses-menu">Dresses</a>
              </li>
              <li>
                <a href="/women-jeans-jeggings">Jeans</a>
              </li>
              <li>
                <a href="/women-shirts-tops-tees">Shirts/Tees</a>
              </li>
              <h6>Footwear</h6>
              <hr />
              <li>
                <a href="/flats">Flats</a>
              </li>
              <li>
                <a href="/women-casual-shoes">Casual shoes</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="/">
              <i className="fas fa-question"></i> Essentials
            </a>
            <ul className="dropdown">
              <li>
                <a href="/haircare">Haircare</a>
              </li>
              <li>
                <a href="/men-grooming">Men grooming</a>
              </li>
              <li>
                <a href="/skincare">Skincare</a>
              </li>
            </ul>
          </li>

          <label htmlFor="toggle-btn" className="hide-menu-btn">
            <i className="fas fa-times"></i>x
          </label>
        </ul>
        <ul className="navigation right">
          <li>
            <a href="/">
              <i className="fas fa-user"></i> Profile
            </a>
            <ul className="dropdown">
              <li>
                <a href="/">Laptops</a>
              </li>
              <li>
                <a href="/">Monitors</a>
              </li>
              <li>
                <a href="/">Printers</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="/">Wishlist</a>
          </li>
          <li>
            <a href="/">Bag</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
