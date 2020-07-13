import React, { Component } from "react";

export default class ToDo extends Component {
  state = {
    showEditForm: false,
    task: "",
  };
  showForm = (newTask) => {
    this.setState({ showEditForm: !this.state.showEditForm });
    this.setState({task:newTask});
  };

  handleEditChange = (e) => {
    const { value } = e.target;
    this.setState((st) => {
      return {
        task: value,
      };
    });
  };
  render() {
    return (
      <div>
        <li>{this.props.task}</li>
        <button onClick={() => this.showForm(this.props.task)}>Edit</button>
        {this.state.showEditForm && (
          <input
            type="text"
            name="task"
            value={this.state.task}
            onChange={this.handleEditChange}
          />
        )}
        {this.state.showEditForm && (
          <button type="button">Save</button>
        )}
      </div>
    );
  }
}
