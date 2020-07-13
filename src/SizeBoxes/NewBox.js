import React, { Component } from "react";

export default class NewBox extends Component {
  state = {
    width: "",
    height: "",
    color: "",
  };

  handleOnChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    if (name !== "color") {
      value = value + "px";
    }
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.props.create(this.state);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>
            <label>Width</label>
            <input onChange={this.handleOnChange} type="text" name="width" />
          </p>
          <p>
            <label>Height</label>
            <input onChange={this.handleOnChange} type="text" name="height" />
          </p>
          <p>
            <label>Color</label>
            <input onChange={this.handleOnChange} type="text" name="color" />
          </p>
          <p>
            <button type="submit">Submit</button>
          </p>
        </form>
      </div>
    );
  }
}
