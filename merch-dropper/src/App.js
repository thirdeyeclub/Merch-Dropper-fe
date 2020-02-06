import React, { useState } from "react";

import NavBar from "./components/NavBar";
import "./App.css";

import Homepage from "./components/Homepage";
import Footer from "./components/Footer";

import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";
import data from "./dummyData";
import MerchGrid from "./components/Layout/MerchGrid";

function App() {
  const [products] = useState(data);

  return (
    <div className="App">
      <NavBar />
      {/* <Homepage /> */}
      {/* // <ShoppingCart /> */}
      {/* // <Products product={products}/> */}
      <MerchGrid />
      <Footer />
    </div>
  );
}

export default App;
