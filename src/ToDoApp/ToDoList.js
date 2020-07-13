import React, { Component } from "react";
import ToDo from "./ToDo";
import ToDoForm from "./ToDoForm";

export default class ToDoList extends Component {
  state = {
    todos: [{ task: "task 1 not completed" }, { task: "task 2 completed" }],
  };

  create = (newToDo) => {
    setTimeout(() => {
      this.setState({ todos: [...this.state.todos, newToDo] });
    }, 2000);
  };
  render() {
    const toDos = this.state.todos.map((todo, index) => {
      return (<ToDo key={index} task={todo.task} />);
    });

    return (
      <div>
        <h1>ToDo List</h1>
        <ToDoForm create={this.create} />
        <ul>{toDos}</ul>
      </div>
    );
  }
}
