<<<<<<< HEAD
import React,{ useState } from 'react';

import NavBar from './components/NavBar';
import Registration from './components/Registration';
import './App.css';
=======
import React from "react";
import ShirtForm from "./components/ShirtForm";
import NavBar from "./components/NavBar";
import Registration from "./components/Registration";
// import ShirtDisplay from "./components/ShirtDisplay";
import "./App.css";
>>>>>>> working on shirt building and display functionality

import Homepage from './components/Homepage';
import Footer from './components/Footer';

import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
import data from './dummyData';


function App() {
  const [products] = useState(data)

  return (
    <div className="App">
      {/* <h1>Labs 20 Merch Dropper</h1> */}
      <NavBar />
      {/* <Registration /> */}
      <ShirtForm />
      {/* <ShirtDisplay /> */}
    </div>
  );
}

export default App;
