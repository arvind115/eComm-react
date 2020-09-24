import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import ProductCard from "../products/ProductCard";
import Loader from "../common/Loader";
import LoginRequired from "../HOC/LoginRouter";

const ProductLoader = (props) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [heartClicked, setHeartClicked] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        `http://localhost:8080/api/v1/products=${props.collection}`
      );
      const js = await res.json();
      console.log(js);
      setProducts(js);
      setLoading(false);
    }
    fetchData();
  }, [props.collection]);

  useEffect(() => {
    if (props.loggedIn && heartClicked) {
      setHeartClicked(false);
    }
  }, [props.loggedIn, heartClicked]);

  return (
    <div>
      <p>
        Heart clicked = {heartClicked === true ? <b>True</b> : <b>False</b>}
      </p>
      {loading ? (
        <Loader />
      ) : heartClicked && !props.loggedIn ? (
        <>
          <p>
            Route to login page ={" "}
            {(heartClicked && !props.loggedIn) === true ? (
              <b>True</b>
            ) : (
              <b>False</b>
            )}
          </p>
          <p>
            User logged in ={" "}
            {props.loggedIn === true ? <b>True</b> : <b>False</b>}
          </p>
          <LoginRequired previous={props.collection} />
        </>
      ) : (
        products.map((product, ind) => (
          <ProductCard
            key={ind}
            {...product}
            inCart={props.cart.some((prod) => prod._id === product._id)}
            heart={props.wishlist.some((prod) => prod._id === product._id)}
            setHeartClicked={setHeartClicked}
          />
        ))
      )}
    </div>
  );
};

function mapStateToProps(state, ownProps) {
  return {
    cart: state.cart,
    wishlist: state.wishlist,
    loggedIn: state.user.name !== undefined,
  };
}

export default connect(mapStateToProps)(ProductLoader);
