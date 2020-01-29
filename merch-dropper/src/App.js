import React from 'react';

import NavBar from './components/NavBar';
import './App.css';
import Products from './components/Products';
import data from './dummyData';
import ShoppingCart from './components/ShoppingCart';

function App() {
  return (
    <div className="App">
      <h1>Labs 20 Merch Dropper</h1>
      <NavBar />
      <ShoppingCart />
      <Products props={data} />
    </div>
  );
}

export default App;
