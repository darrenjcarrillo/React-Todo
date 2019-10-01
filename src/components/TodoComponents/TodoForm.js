import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      todo: ""
    };
  }

  handleChanges = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitTodo = e => {
    e.preventDefault();
    // take the todo off of state
    // send that todo to a function defined on App.js
    this.props.addItem(this.state.todo);
    // reset the state
    this.setState({ item: "" });
  };

  // clearSubmit = e => {
  //   e.preventDefault();
  //   this.setState({
  //     completed: this.props.clearCompleted.filter(item => !item.completed)
  //   });
  // };

  // clearSubmit = e => {
  //   e.preventDefault();
  //   this.props.handleClearCompleted(this.state.todo);
  //   this.setState({ item: "" });
  // };

  render() {
    return (
      <form onSubmit={this.submitTodo}>
        <input
          type="text"
          value={this.state.task}
          name="todo"
          placeholder="add todo"
          onChange={(this, this.handleChanges)}
        />
        <button type="submit">Add</button>
      </form>
    );
  }
}

export default TodoForm;
