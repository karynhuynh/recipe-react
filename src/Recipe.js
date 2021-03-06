import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

import "./Recipe.css";

export default function Recipe(props) {
  const [keyword, setKeyword] = useState(props.defaultKeyword);
  const [results, setResults] = useState(null);
  const [loaded, setLoaded] = useState(false);

  function foodSubmit(event) {
    event.preventDefault();
    search();
  }

  function foodSearch(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  function search() {
    //   documentation: https://developer.edamam.com/edamam-docs-recipe-api
    const apiId = "e6f467f5";
    const apiKey = "ba93ffc5731ad174b73b38733e12f25c";
    let apiUrl = `https://api.edamam.com/search?q=${keyword}&app_id=${apiId}&app_key=${apiKey}`;
    axios.get(apiUrl).then(handleRecipeResponse);
  }

  function handleRecipeResponse(response) {
    setResults(response.data.hits);
  }

  if (loaded) {
    return (
      <div className="Recipe">
        <form onSubmit={foodSubmit}>
          <input
            type="text"
            placeholder="Search a receipe..."
            // defaultValue={props.defaultKeyword}
            // autoFocus={true}
            required
            onChange={foodSearch}
          />
          <button type="submit">
            <i className="fas fa-search"></i>
          </button>
        </form>
        <Results results={results} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
