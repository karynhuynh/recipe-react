import React from "react";
// import Ingredients from "./Ingredients";
import RecipeImage from "./RecipeImage";
import RecipeInfo from "./RecipeInfo";

import "./Results.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        {props.results.map((result, index) => {
          return (
            <div key={index} className="results-card">
              <RecipeImage
                image={result.recipe.image}
                url={result.recipe.url}
              />
              <h3>{result.recipe.label}</h3>
              <RecipeInfo info={result.recipe} />
              {/* <div className="Ingredients">
                <Ingredients ingredients={result.recipe.ingredientLines} />
              </div> */}
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
