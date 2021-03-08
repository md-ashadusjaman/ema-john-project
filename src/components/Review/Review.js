import React, { useEffect, useState } from "react";
import fakeData from "../../fakeData";
import { getDatabaseCart } from "../../utilities/databaseManager";
import ReviewItem from "../ReviewItem/ReviewItem";

const Review = () => {
  const [cart, setCart ] = useState([]);
  useEffect(() => {
    const savedCart = getDatabaseCart();
    // console.log(savedCart);
    const productKeys = Object.keys(savedCart);
    // const productKeys = Object.values(savedCart);
    // console.log(productKeys);
    // const counts = productKeys.map( key => savedCart[key]);

    const cartProducts = productKeys.map( key => {
        const product = fakeData.find( pd => pd.key === key);
        product.quantity = savedCart[key];
        return product;
    }, [])
setCart(cartProducts);
    // console.log(cartProducts);

    
  });
  return (
    <div>
      <h1>Cart Items: {cart.length}</h1>
      {
          cart.map(pd => <ReviewItem 
          key= {pd.key}
          product={pd}></ReviewItem>)
      }
    </div>
  );
};

export default Review;
