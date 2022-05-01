import React from "react";
import "./TodoList";

export default function Display(props) {
  return (
    <div className="container listitem">
      <div>
        {`${props.index + 1} .`}&nbsp;
        {props.item}
      </div>
    </div>
  );
}
