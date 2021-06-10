import React from "react";
import Recipe from "./Recipe";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <h1>I'm hungry for...</h1>
      </header>
      <Recipe defaultKeyword="kimchi fried rice" />
    </div>
  );
}

export default App;
