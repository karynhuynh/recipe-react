import React from "react";

export default function RecipeImage(props) {
  if (props.image) {
    return (
      <div className="RecipeImage">
        {/* <a href={props.image.url} target="_blank" rel="noreferrer"></a> */}
        <img src={props.image} alt="recipe final result" />
      </div>
    );
  } else {
    return null;
  }
}
