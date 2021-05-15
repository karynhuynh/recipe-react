import React from "react";

export default function RecipeInfo(props) {
  if (props.info) {
    return (
      <div className="RecipeInfo">
        <span>Category: </span>
        {props.info}
      </div>
    );
  } else {
    return <div className="RecipeInfo">Category: N/A</div>;
  }
}
