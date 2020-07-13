import React, { Component } from "react";

export default class ToDoForm extends Component {
  state = {
    task: "",
    loading: false,
  };

  onHandleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.setState({ loading: true });
    this.props.create(this.state);
    this.setState({ task: "", loading: false });
  };
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <p>
          <input
            type="text"
            onChange={this.onHandleChange}
            value={this.state.task}
            name="task"
          />
        </p>
        <p>
          {this.state.loading && <h1>Loading</h1>}
          <button type="submit">Add ToDo</button>
        </p>
      </form>
    );
  }
}
