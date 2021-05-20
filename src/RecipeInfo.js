import React from "react";

import "./RecipeInfo.css";

export default function RecipeInfo(props) {
  if (props.info) {
    return (
      <div className="RecipeInfo">
        <div className="numbers">
          <div className="serving">
            Serves <span className="amount">{props.info.yield}</span>
          </div>
          <div className="calories">
            <span className="amount">{Math.round(props.info.calories)}</span>{" "}
            kCal
          </div>
        </div>
        <div className="category">
          Category: <span className="category-info">{props.info.dishType}</span>
        </div>
        <div className="source">
          <span>Source: </span>
          {props.info.source}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
