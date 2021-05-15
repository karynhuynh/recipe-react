import React from "react";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        {props.results.hits.map((hit, index) => {
          return <h3 key={index}>{hit.recipe.label}</h3>;
        })}
      </div>
    );
  } else {
    return null;
  }
}
