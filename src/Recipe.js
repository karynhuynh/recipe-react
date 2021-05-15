import React, { useEffect, useState } from "react";
import axios from "axios";
import Results from "./Results";

export default function Recipe(props) {
  useEffect(() => {}, []);

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
    console.log(response);
    setResults(response.data.hits);
  }

  if (loaded) {
    return (
      <div className="App">
        <form onSubmit={foodSubmit}>
          <input
            type="text"
            defaultValue={props.defaultKeyword}
            autoFocus={true}
            required
            onChange={foodSearch}
          />
          <button type="submit">Search</button>
        </form>
        <div className="Results">
          <Results results={results} />
        </div>
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
