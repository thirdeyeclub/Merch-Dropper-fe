import React from 'react';

import NavBar from './components/NavBar';
import './App.css';
import Homepage from './components/Homepage';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Homepage />
      <Footer />
    </div>
  );
}

export default App;
