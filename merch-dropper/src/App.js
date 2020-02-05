import React from "react";
import NavBar from "./components/NavBar";
import Registration from "./components/Registration";
import Shirt from "./components/ShirtComponents/Shirt";
import ShirtMaker from "./components/ShirtComponents/ShirtMaker";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <h1>Labs 20 Merch Dropper</h1> */}
      <NavBar />
      <Registration />
      <Shirt />


      {/* <ShirtDisplay /> */}
    </div>
  );
}

export default App;
