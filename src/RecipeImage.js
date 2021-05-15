import React from "react";

export default function RecipeImage(props) {
  if (props.image) {
    return (
      <div className="RecipeImage">
        <a href={props.image.url} target="_blank" rel="noreferrer">
          <img src={props.image.image} alt="recipe final result" />
        </a>
      </div>
    );
  } else {
    return null;
  }
}
