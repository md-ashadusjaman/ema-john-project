import React, { useState, useEffect } from "react";
import fakeData from "../../fakeData";
import { getDatabaseCart, removeFromDatabaseCart } from "../../utilities/databaseManager";
import Cart from "../Header/Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";

const Review = () => {
  const [cart, setCart] = useState([]);

  const removeProduct = (productKey) => {
    // console.log('remove product', productKey);

    const newCart = cart.filter((pd) => pd.key !== productKey);
    setCart(newCart);
    removeFromDatabaseCart(productKey);
  }

  useEffect(() => {
    const savedCart = getDatabaseCart();
    // console.log(savedCart);
    const productKeys = Object.keys(savedCart);
    // const productKeys = Object.values(savedCart);
    // console.log(productKeys);
    // const counts = productKeys.map( key => savedCart[key]);

    const cartProducts = productKeys.map((key) => {
      const product = fakeData.find((pd) => pd.key === key);
      product.quantity = savedCart[key];
      return product;
    }, []);
    setCart(cartProducts);
    // console.log(cartProducts);
  },[]);
  return (
    <div className="twin-container">
      {/* <h1>Cart Items: {cart.length}</h1> */}
<div className="product-container">
{cart.map((pd) => (
        <ReviewItem
          key={pd.key}
          removeProduct={removeProduct}
          product={pd}
        ></ReviewItem>
      ))}
</div>

<div className="cart-container">
  <Cart cart= {cart}></Cart>

</div>

      
    </div>
  );
};

export default Review;
