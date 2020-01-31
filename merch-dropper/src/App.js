import React,{ useState } from 'react';

import NavBar from './components/NavBar';
import './App.css';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
import data from './dummyData';

function App() {
  const [products] = useState(data)

  return (
    <div className="App">
      <h1>Labs 20 Merch Dropper</h1>
      <NavBar />
      <ShoppingCart />
      <Products product={products}/>
    </div>
  );
}

export default App;
