// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from "react";

import Todo from "./Todo";
import "./Todo.css";

const TodoList = props => {
  return (
    <div className="todo-list">
      {props.todos.map(todo => (
        <Todo key={todo.id} todo={todo} toggleItem={props.toggleItem} />
      ))}
      <div className="clear-div">
        <button
          className="clear-button"
          type="button"
          onClick={props.clearCompleted}
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default TodoList;
