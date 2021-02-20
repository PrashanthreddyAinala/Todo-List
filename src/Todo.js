import React from "react";

function TodoList(props) {
  var completedStyle = {
    color: "#cdcdcd",
    textDecoration: "line-through",
    fontStyle: "italic"
  };
  return (
    <div className="cardContent">
      <input
        type="checkbox"
        checked={props.item.completed}
        onChange={() => props.handleChange(props.item.id)}
      />
      <p style={props.item.completed ? completedStyle : null}>
        {props.item.text}
      </p>
    </div>
  );
}

export default TodoList;
