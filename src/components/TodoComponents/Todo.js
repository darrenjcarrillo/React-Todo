import React from "react";
import "./Todo.css";

const Todo = props => {
  return (
    <div
      className={`item${props.todo.completed ? " completed" : ""}`}
      onClick={() => props.toggleItem(props.todo.id)}
    >
      <p className="ptag">{props.todo.task}</p>
    </div>
  );
};

export default Todo;
