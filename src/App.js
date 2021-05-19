import React from "react";
import Recipe from "./Recipe";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>I'm hungry for...</h1>
      <Recipe defaultKeyword="blueberry" />
    </div>
  );
}

export default App;
