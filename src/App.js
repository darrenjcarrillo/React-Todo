import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

const Todos = [
  {
    task: "Organize Garage",
    id: 1528817077286,
    completed: false
  },
  {
    task: "Bake Cookies",
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      Todos
    };
  }

  toggleItem = id => {
    console.log(id);

    this.setState({
      Todos: this.state.Todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        } else {
          return todo;
        }
      })
    });
  };

  addItem = todo => {
    console.log(todo);
    const newItem = {
      task: todo,
      id: Date.now(),
      completed: false
    };

    this.setState(prevState => ({
      Todos: [...prevState.Todos, newItem]
    }));
  };

  handleChanges = e =>
    // e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });

  clearCompleted = e => {
    e.preventDefault();
    console.log(`clear`);
    this.setState({
      Todos: [{}]
      // Todos: this.state.Todos.filter(todo => !todo.completed)
    });
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <div>
          <h1>Todo List</h1>
          <TodoForm addItem={this.addItem} />
        </div>
        <TodoList
          todos={this.state.Todos}
          toggleItem={this.toggleItem}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
