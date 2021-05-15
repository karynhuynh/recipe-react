import React from "react";
// import Ingredients from "./Ingredients";
import RecipeImage from "./RecipeImage";
import RecipeInfo from './RecipeInfo.js'

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
              {/* <div className="Ingredients">
                <Ingredients ingredients={result.recipe.ingredientLines} />
              </div> */}
              <div className="RecipeInfo">
                <RecipeInfo info={result.recipe.dishType}/>
              </div>
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
