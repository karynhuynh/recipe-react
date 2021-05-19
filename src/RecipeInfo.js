import React from "react";

import "./RecipeInfo.css";

export default function RecipeInfo(props) {
  if (props.info) {
    return (
      <div className="RecipeInfo">
        <div className="Serving">
          Serves <span className="amount">{props.info.yield}</span>
        </div>
        <div className="Calories">
          <span className="amount">{Math.round(props.info.calories)}</span> kCal
        </div>
      </div>
    );
  } else {
    return null;
  }
}
