import React from "react";
// import Ingredients from "./Ingredients";
import RecipeImage from "./RecipeImage";
import Category from "./Category.js";
import RecipeInfo from "./RecipeInfo";

import "./Results.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        {props.results.map((result, index) => {
          return (
            <div key={index} className="results-card">
              <h3>{result.recipe.label}</h3>
              <RecipeInfo info={result.recipe} />
              <RecipeImage image={result.recipe.image} />
              {/* <div className="Ingredients">
                <Ingredients ingredients={result.recipe.ingredientLines} />
              </div> */}
              <Category category={result.recipe.dishType} />
              <div className="RecipeSource">
                <span>Source: </span>
                <a href={result.recipe.url} target="_blank" rel="noreferrer">
                  {result.recipe.source}
                </a>
              </div>
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
