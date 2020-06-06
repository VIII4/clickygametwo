import React from "react";
import logo from "./logo.svg";
import "./App.css";

//Components
import Navbar from "./components/navbar";
import CardDeck from "./components/carddeck";

function App() {
  return (
    <>
      <Navbar title="Memory Game"></Navbar>
      <div className="container mt-3 p-3">
        <CardDeck></CardDeck>
      </div>
    </>
  );
}

export default App;

// View - container
//Overlay
