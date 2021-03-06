import React from "react";
import "./Row.css";

export default function Row({ icon: Icon, ...props }) {
  return (
    <tr>
      <th scope="row">{props.no}</th>
      <td>
        <div className="cartImgDiv">
          <img src={props.img} alt="img" />
        </div>
      </td>
      <td>{props["product-name"]}</td>
      <td>{props.brand}</td>
      <td>{props["actual-price"].match(/\d+/g)[0]}</td>
      <td>
        <div className="trashDiv" onClick={() => props.iconClick(props)}>
          <Icon fill={"red"} />
        </div>
      </td>
    </tr>
  );
}
