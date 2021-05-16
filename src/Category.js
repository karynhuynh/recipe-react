import React from "react";

import "./Category.css";

export default function Category(props) {
  if (props.category) {
    return (
      <div className="Category">
        Category: <span className="category-info">{props.category}</span>
      </div>
    );
  } else {
    return <div className="Category">Category: N/A</div>;
  }
}
