import React from "react";

import "./Recipe.css";

export default function RecipeImage(props) {
  if (props.image) {
    return (
      <div className="RecipeImage">
        <a href={props.url} target="_blank" rel="noreferrer">
          <img src={props.image} alt="recipe result" />
        </a>
      </div>
    );
  } else {
    return null;
  }
}
