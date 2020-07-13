import React, { Component } from "react";

export default class Dice extends Component {
  render() {
    return <i className={`Die fas fa-dice-${this.props.face}`}></i>;
  }
}
