import React, { Component } from "react";

export default class Box extends Component {
  render() {
    return (
      <div>
        <div
          style={{
            backgroundColor: this.props.color,
            width: this.props.width,
            height: this.props.height,
          }}
        >
          Box
        </div>
        <hr></hr>
        <hr></hr>
      </div>
    );
  }
}
