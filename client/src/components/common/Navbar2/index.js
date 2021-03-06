import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import catalogues from "./catalouge";
import NavCartIcon from "../../cart/NavCartIcon";
import UserSvg from "../../common/UserSvg";
import SignInSvg from "../../common/SignInSvg";
import WishlistSvg from "../../common/WishlistSVg";

import { connect } from "react-redux";
import { clearUserData } from "../../../redux/actions/userActions";

const ListMaker = (props) => {
  return (
    <ul>
      <h6>{props.name}</h6>
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
  const signOut = () => {
    console.log("sign out clicked..");
    props.clearUserData();
  };
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
            <li key={catalogue.main} className={catalogue.main}>
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
            <Link to="">
              {props.loggedIn ? (
                <UserSvg fill={"royalblue"} />
              ) : (
                <SignInSvg fill={"grey"} />
              )}
              <div className="navtext">Profile</div>
            </Link>
            <div className="dropdown-div profile-dropdown">
              <div className="innerDiv">
                <div className="profile-top">
                  {props.user.name !== undefined ? (
                    <>
                      <p>{props.user.name}</p>
                      <button onClick={signOut} className="btn btn-outline-secondary">Sign Out</button>
                    </>
                  ) : (
                    <>
                      <div className="infoRow boldFont">Welcome!</div>
                      <div className="infoRow">
                        To access account and manage orders
                      </div>
                      <div className="fullRow">
                        <Link to="/auth/google" className="signIn">
                          Sign in
                        </Link>
                      </div>
                    </>
                  )}
                </div>
                <div className="linkRow wishlist">
                  <Link to="/wishlist">Wishlist</Link>
                </div>
                <div className="linkRow orders">
                  <Link to="/">Orders</Link>
                </div>
              </div>
            </div>
          </li>
          <li>
            <Link to="/wishlist">
              <WishlistSvg fill={props.wishlisted ? "green" : "grey"} />
              <div className="navtext">Wishlist</div>
            </Link>
          </li>
          <li>
            <Link to="/cart">
              <NavCartIcon />
              <div className="navtext">Bag</div>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

function mapStateToProps({ user, wishlist }, ownProps) {
  return {
    user,
    loggedIn: user.name !== undefined,
    wishlisted: wishlist.length > 0,
    ownProps,
  };
}

const mapDispatchToProps = {
  clearUserData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
