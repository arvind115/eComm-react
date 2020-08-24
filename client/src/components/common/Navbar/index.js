import React, { Component } from "react";
import { Link } from "react-router-dom";
import CartIcon from "../../cart/CartIcon";

import { connect } from "react-redux";

import "./Navbar.css";

const NavItem = (props) => {
  const pageURI = window.location.pathname + window.location.search;
  const liClassName = props.path === pageURI ? "nav-item active" : "nav-item";
  const aClassName = props.disabled ? "nav-link disabled" : "nav-link";
  return (
    <li className={liClassName}>
      <Link to={props.path} className={aClassName}>
        {props.name}
        {props.path === pageURI ? (
          <span className="sr-only">(current)</span>
        ) : (
          ""
        )}
      </Link>
    </li>
  );
};

class NavDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: false,
    };
  }
  showDropdown(e) {
    e.preventDefault();
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  }
  render() {
    const classDropdownMenu =
      "dropdown-menu" + (this.state.isToggleOn ? " show" : "");
    return (
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          href="/"
          id="navbarDropdown"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          onClick={(e) => {
            this.showDropdown(e);
          }}
        >
          {this.props.name}
        </a>
        <div className={classDropdownMenu} aria-labelledby="navbarDropdown">
          {this.props.children}
        </div>
      </li>
    );
  }
}

class Navigation extends Component {
  state = {
    isNavCollapsed: true,
  };

  handleNavCollapse = () =>
    this.setState({ isNavCollapsed: !this.state.isNavCollapsed });

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/" className="navbar-brand">
          Navbar
        </Link>
        <button
          className={`navbar-toggler ${
            this.state.isNavCollapsed ? "collapsed" : ""
          }`}
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded={!this.state.isNavCollapsed ? true : false}
          aria-label="Toggle navigation"
          onClick={this.handleNavCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`${
            this.state.isNavCollapsed ? "collapse" : "not"
          } navbar-collapse`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mr-auto">
            <NavItem path="/" name="Home" />
            <NavItem path="/products" name="Products" />
            <NavItem path="/auth/facebook" name="facebook" />
            <NavItem path="/auth/google" name="google" />
            <NavItem path="/checkout" name="checkout" />

            <NavDropdown name="Dropdown">
              <a className="dropdown-item" href="/">
                Action
              </a>
              <a className="dropdown-item" href="/">
                Another action
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="/">
                Something else here
              </a>
            </NavDropdown>
          </ul>
          <form className="form-inline my-2 mx-4 my-lg-2 search">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
          <CartIcon />
        </div>
        <div className="userProfile">
          {this.props.user.name ? (
            <p>{this.props.user.name}</p>
          ) : (
            <Link to="/auth/google">Sign in</Link>
          )}
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ user }, ownProps) {
  return {
    user,
  };
}

export default connect(mapStateToProps)(Navigation);
