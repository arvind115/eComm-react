import React, { useEffect, useState } from "react";

import "./ProductDetail.css";
import Loader from "../common/Loader";

const ProductDetail = (props) => {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState({});
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        `http://localhost:8080/api/v1/products=${props.collection}/id=${props.id}`
      );
      const js = await res.json();
      setProduct({ ...js });
      setLoading(false);
      console.log(js);
    }
    fetchData();
  }, [props.collection, props.id]);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <>
          <b>Id : </b> {product._id} <br />
          <b>Name : </b> {product["product-name"]} <br />
          <b>Brand : </b> {product.brand} <br />
          <b>Price : </b> {product["actual-price"]} <br />
          <b>Sizes :</b> {product.sizes.map((size) => size)} <br />
          <img src={product.img} alt="product" />
        </>
      )}
    </div>
  );
};

export default ProductDetail;
