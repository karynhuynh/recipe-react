import React from "react";
import Ingredients from "./Ingredients";
import RecipeImage from "./RecipeImage";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        {props.results.map((result, index) => {
          return (
            <div key={index}>
              <h4>{result.recipe.label}</h4>
              <div className="RecipeImage">
                <RecipeImage image={result.recipe} />
              </div>
              <div className="Ingredients">
                <Ingredients ingredients={result.recipe.ingredientLines} />
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
