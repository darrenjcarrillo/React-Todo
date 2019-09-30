import React from "react";

class ListForm extends React.Component {
  constructor() {
    super();
    this.state = {
      task: ""
    };
  }

  handleChanges = e => {
    this.setState({
      [e.target.task]: e.target.value
    });
  };

  submitItem = e => {
    e.preventDefault();
    this.props.addItem(this.state.item);
  };

  render() {
    return (
      <form onSubmit={this.submitItem}>
        <input
          type="text"
          value={this.item}
          task="item"
          onChange={this.handleChanges}
        />
        <button>Add</button>
      </form>
    );
  }
}

export default ListForm;
