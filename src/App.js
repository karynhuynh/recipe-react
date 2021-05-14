import React from "react";
import axios from "axios";
import "./App.css";

function App() {
  const apiId = "e6f467f5";
  const apiKey = "ba93ffc5731ad174b73b38733e12f25c";
  const apiUrl = `https://api.edamam.com/search?q=chicken&app_id=${apiId}&app_key=${apiKey}`;

  return (
    <div className="App">
      <h1>Hello Karyn</h1>
    </div>
  );
}

export default App;
