import React,{ useState } from 'react';
import { Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import './App.css';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
import data from './dummyData';
import Callback from './components/Callback';

function App() {
  const [products] = useState(data)

  return (
    <div className="App">
      <h1>Labs 20 Merch Dropper</h1>
      <NavBar />
      <ShoppingCart />
      <Products product={products}/>
      <Route exact path="/callback" component={Callback} exact />
    </div>
  );
}

export default App;
