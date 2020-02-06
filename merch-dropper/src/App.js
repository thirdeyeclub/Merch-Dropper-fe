import React,{ useState } from 'react';
import { Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import './App.css';

import Homepage from './components/Homepage';
import Footer from './components/Footer';

import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
import data from './dummyData';


function App() {
  const [products] = useState(data)

  return (
    <div className="App">
      <NavBar />
      <Route exact path='/' component={Homepage} />
      {/* <Route path='/shop' component={Products} /> */}
      <Route path='/cart' component={ShoppingCart} />
      {/* // <ShoppingCart /> */}
      // <Products product={products}/>
      <Footer />
    </div>
  );
}

export default App;
