import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Shop from "./components/Header/Shop/Shop";
import Review from "./components/Review/Review"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Inventory from "./components/Inventory/Inventory";
import ProductDetail from "./components/ProductDetail/ProductDetail"
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <div>
     <Header></Header>
      <Router>
        <Switch>
          <Route path="/shop"> <Shop></Shop> </Route>
          <Route path="/review"> <Review></Review> </Route>
          <Route path="/inventory"> <Inventory></Inventory> </Route>
          <Route exact path="/"> <Shop></Shop> </Route>
          <Route  path="/product/:productKey"> <ProductDetail></ProductDetail> </Route>

          <Route path="*"> <NotFound></NotFound> </Route>
        </Switch>
      </Router>

     
      
    </div>
  );
}

export default App;
