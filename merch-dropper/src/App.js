import React from "react";
import ShirtForm from "./components/ShirtForm";
import NavBar from "./components/NavBar";
import Registration from "./components/Registration";
// import ShirtDisplay from "./components/ShirtDisplay";
import "./App.css";

function App() {
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
