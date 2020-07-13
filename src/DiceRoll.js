import React, { Component } from "react";
import Dice from "./Dice";

export default class DiceRoll extends Component {
  static defaultProps = {
    sides: ["one", "two", "three", "four", "five", "six"],
  };
  state = {
    dice1: "one",
    dice2: "one",
  };

  handleRoll = (e) => {
    e.preventDefault();
    const number1 = this.props.sides[
      Math.floor(Math.random() * this.props.sides.length)
    ];
    const number2 = this.props.sides[
      Math.floor(Math.random() * this.props.sides.length)
    ];
    this.setState({ dice1: number1, dice2: number2 });
  };
  render() {
    return (
      <div>
        <Dice face={this.state.dice1} />
        <Dice face={this.state.dice2} />

        <button onClick={this.handleRoll} type="submit">
          Roll!
        </button>
      </div>
    );
  }
}
