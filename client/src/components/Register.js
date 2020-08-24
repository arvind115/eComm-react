import React, { Component } from "react";
export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  handleInputChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  };
  onSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        body: JSON.stringify(this.state),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.status === 200) {
        alert("Registered successfully..");
        this.props.history.push("/");
      } else {
        throw new Error(res.error);
      }
    } catch (err) {
      console.error(err);
      alert("Error while registering, please try again");
    }
  };
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <h1>Sign up Below!</h1>
        <input
          type="email"
          name="email"
          placeholder="Enter email"
          value={this.state.email}
          onChange={this.handleInputChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          value={this.state.password}
          onChange={this.handleInputChange}
          required
        />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
