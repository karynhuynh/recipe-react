import React from "react";

import "./RecipeInfo.css";

export default function RecipeInfo(props) {
  if (props.info) {
    return (
      <div className="RecipeInfo">
          <div className="Serving">
            Serves <span>{props.info.yield}</span>
          </div>
          <div className="Calories">
            kCal <span>{Math.round(props.info.calories)}</span>
          </div>
      </div>
    );
  } else {
    return null;
  }
}
