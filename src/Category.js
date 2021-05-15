import React from "react";

export default function Category(props) {
  if (props.info) {
    return (
      <div className="Category">
        <span>Category: </span>
        {props.category}
      </div>
    );
  } else {
    return <div className="Category">Category: N/A</div>;
  }
}
