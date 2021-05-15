import React from "react";

export default function Ingredients(props) {
  if (props.ingredients) {
    return (
      <ul className="Ingredients">
        {props.ingredients.map((ingredient, index) => {
          return <li key={index}>{ingredient}</li>;
        })}
      </ul>
    );
  }
}
