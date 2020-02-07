import React, { useState } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import ShoppingCart from "./components/ShoppingCart";
import Callback from "./components/Callback";
import Home from "./components/Home";
import Footer from "./components/Footer";
import ProductDisplay from "./components/ProductDisplay";
import initialState from "./reducers/initialState";

function App() {
  const [products] = useState(initialState.products);
  return (
    <div className="App">
      <Route exact path="/" component={Home} exact />
      <Route exact path="/callback" component={Callback} exact />
      <ShoppingCart />
      <ProductDisplay products={products} />
      <Footer />
    </div>
  );
}

export default App;
