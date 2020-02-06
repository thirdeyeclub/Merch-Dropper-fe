import React, { useState } from "react";

import NavBar from "./components/NavBar";
import "./App.css";

import Homepage from "./components/Homepage";
import Footer from "./components/Footer";

import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";
import productArray from "./components/ProductDisplay";
import ProductDisplay from "./components/ProductDisplay";

function App() {
  const [products] = useState(productArray);

  return (
    <div className="App">
      <NavBar />
      {/* <Homepage /> */}
      // <ShoppingCart />
      {/* // <Products product={products}/> */}
      <ProductDisplay product={products} />
      <Footer />
    </div>
  );
}

export default App;
