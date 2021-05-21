import React from "react";
import Recipe from "./Recipe";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <h1>I'm hungry...</h1>
      </header>
      <Recipe defaultKeyword="kale" />
    </div>
  );
}

export default App;
