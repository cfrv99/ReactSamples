import React, { Component } from "react";

export default class AddIcon extends Component {
  static defaultProps = {
    options: ["archway", "baby", "bell", "archive", "at", "angry", "anchor"],
  };
  state = {
    icons: ["bell", "at"],
  };
  addIcon = () => {
    let id = Math.floor(Math.random() * this.props.options.length);
    let newIcon = this.props.options[id];

    this.setState({ icons: [...this.state.icons, newIcon] });
  };

  deleteIcon = () => {
      let id = Math.floor(Math.random()*this.state.icons.length);
      let deleted = this.state.icons[id];

      this.setState({icons:[...this.state.icons.filter(i=>i!==deleted)]});
  };
  render() {
    const ics = this.state.icons.map((item, index) => (
      <i key={index} className={`fa fa-${item}`} aria-hidden="true"></i>
    ));
    return (
      <div>
        <h1>salam</h1>
        <h2>Icons:{ics}</h2>
        <button type="submit" onClick={this.addIcon}>
          Add Icon
        </button>
        <button onClick={this.deleteIcon} type="submit">Delete Icon</button>
      </div>
    );
  }
}
