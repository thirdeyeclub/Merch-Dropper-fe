import React, { useState } from "react";

import NavBar from "./components/NavBar";
import "./App.css";

import Homepage from "./components/Homepage";
import Footer from "./components/Footer";

import ShoppingCart from "./components/ShoppingCart";
import initialState from "./reducers/initialState";
import ProductDisplay from "./components/ProductDisplay";

function App() {
  const [products] = useState(initialState.products);

  return (
    <div className="App">
      <NavBar />
      {/* <Homepage /> */}
      <ShoppingCart />
      <ProductDisplay products={products} />
      <Footer />
    </div>
  );
}

export default App;
