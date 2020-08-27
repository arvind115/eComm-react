import React, { Component } from "react";

class ProductLoader extends Component {
  constructor() {
    super();
    this.state = {
      producsts: [],
    };
  }
  async componentDidMount() {
    console.log("mounted..");
    const res = await fetch(
      `http://localhost:8080/api/v1/products=${this.props.collection}`
    );
    const js = await res.json();
    console.log(js);
    this.setState({ producsts: js });
  }
  render() {
    return (
      <div>
        here
        {this.state.producsts.map((prod) => (
          <>
            <b>{prod.brand}</b>
            <br />
          </>
        ))}
      </div>
    );
  }
}

export default ProductLoader;
