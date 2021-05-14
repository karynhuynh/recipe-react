import React, { useEffect } from "react";
import axios from "axios";

export default function Recipe() {
  useEffect(() => {}, []);

  function foodSubmit(event) {
    event.preventDefault();
    search();
  }

  function search() {
    //   documentation: https://developer.edamam.com/edamam-docs-recipe-api
    const apiId = "e6f467f5";
    const apiKey = "ba93ffc5731ad174b73b38733e12f25c";
    let apiUrl = `https://api.edamam.com/search?q=chicken&app_id=${apiId}&app_key=${apiKey}`;
    console.log(apiUrl);
    axios.get(apiUrl).then(handleRecipeResponse);
  }

  function handleRecipeResponse(response) {
    console.log(response);
  }

  return (
    <div className="App">
      <form className="search-form" onSubmit={foodSubmit}>
        <input className="search-bar" type="text" autoFocus={true} required />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}
