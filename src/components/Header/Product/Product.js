import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Product = (props) => {
  // console.log(props);
  const { img, name, seller, price, stock, key } = props.product;

  return (
    <div className="product">
      <div>
        {/* <img src={props.product.img} alt="" /> */}
        <img className="img" src={img} alt="" />
      </div>
      <div>
        {/* <h4>{props.product.name}</h4> */}
        <h4 className="product-name">
          {" "}
          <Link to={"/product/" + key}>{name}</Link>{" "}
        </h4>
        <br />
        <p>
          <small>by: {seller}</small>
        </p>
        <p>${price}</p>
        <p>
          <small>Only {stock} left in stock - Order Soon</small>
        </p>
        {props.showAddToCart === true && (
          <button
            className="main-button"
            onClick={() => props.handleAddProduct(props.product)}
          >
            <FontAwesomeIcon icon={faShoppingCart} />
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;
