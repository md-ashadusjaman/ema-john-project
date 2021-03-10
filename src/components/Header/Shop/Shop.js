import React, { useEffect } from "react";
import fakeData from "../../../fakeData";
import { useState } from "react";
import "./Shop.css";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import { addToDatabaseCart, getDatabaseCart } from "../../../utilities/databaseManager";

const Shop = () => {
  // console.log(fakeData);
  const first10 = fakeData.slice(0, 10);
  const [products, setProducts] = useState(first10);
  const [cart, setCart] = useState([]);


useEffect(() => {
  const savedCart = getDatabaseCart();
  const productKeys = Object.keys(savedCart);
  const previousCart = productKeys.map (existingKey => {
    const product = fakeData.find (pd => pd.key === existingKey);
    product.quantity = savedCart[existingKey];
    return product;
  })
  setCart(previousCart);
}, [])




  const handleAddProduct = (product) => {
    // console.log("Product Added", product);
    // const newCart = [...cart, product];
    // setCart(newCart);
    // const sameProduct = newCart.filter(pd => pd.key === product.key);

const toBeAddedKey = product.key;
const sameProduct = cart.find(pd => pd.key === toBeAddedKey);
let count = 1;
let newCart;
if (sameProduct){
  const count = sameProduct.quantity + 1;
  sameProduct.quantity =  count //sameProduct.quantity +1;
  const others = cart.filter(pd => pd.key !== toBeAddedKey); 
  newCart = [...others, sameProduct];
}
else{
  product.quantity = 1;
  newCart = [...cart, product];
}
    // const count = sameProduct.length;
    setCart(newCart);
    addToDatabaseCart (product.key, count);
  };

  return (
    <div className="twin-container">
      <div className="product-container">
      
        {products.map((pd) => (
          <Product
          key={pd.key}
            showAddToCart={true}
            handleAddProduct={handleAddProduct}
            product={pd}
          ></Product>
        ))}
      </div>

      <div className="cart-container">
        <Cart cart={cart}></Cart>

        {/* <h3>this is cart</h3>
                <h5>Order Summery: {cart.length}</h5> */}
      </div>
    </div>
  );
};

export default Shop;
