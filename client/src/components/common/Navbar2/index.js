import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import catalogues from "./catalouge";

import { connect } from "react-redux";

const ListMaker = (props) => {
  return (
    <ul>
      <h6>{props.name}</h6>
      <hr />
      {props.types.map((type) => (
        <li key={type[0]}>
          <Link to={`/${type[0]}`}>{`${type[1]}`}</Link>
        </li>
      ))}
    </ul>
  );
};

const DropdownMaker = ({ sub }) => {
  return (
    <div className="dropdown-div">
      {sub.map((details) => (
        <ListMaker
          name={details.name}
          types={details.types}
          key={details.name}
        />
      ))}
    </div>
  );
};

const Navbar = (props) => {
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
          {catalogues.map((catalogue) => (
            <li key={catalogue.main}>
              <Link to={catalogue.main}>{catalogue.main}</Link>
              <DropdownMaker sub={catalogue.sub} />
            </li>
          ))}
          <label htmlFor="toggle-btn" className="hide-menu-btn">
            <i className="fas fa-times"></i>x
          </label>
        </ul>
        {/* <div id="search-form">
          <form className="form-inline search">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search for products,brands and more"
              aria-label="Search"
            />
          </form>
        </div> */}
        <ul className="navigation right">
          <li>
            <Link to="/">
              <i className="fas fa-user"></i> Profile
            </Link>
            <div className="dropdown-div profile-dropdown">
              <ul>
                <li>
                  <div className="profile-top">
                    {props.user.name !== undefined ? (
                      <p>{props.user.name}</p>
                    ) : (
                      <>
                        <p>Welcome! To access account and manage orders</p>
                        <Link to="/auth/google">Sign in</Link>
                      </>
                    )}
                  </div>
                </li>
                <li>
                  <Link to="/wishlist">Wishlist</Link>
                </li>
                <li>
                  <Link to="/">Orders</Link>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <Link to="/wishlist">Wishlist</Link>
          </li>
          <li>
            <Link to="/cart">Bag</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

function mapStateToProps({ user }, ownProps) {
  return {
    user,
    ownProps,
  };
}

export default connect(mapStateToProps)(Navbar);
