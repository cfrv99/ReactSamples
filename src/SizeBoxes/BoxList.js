import React, { Component } from "react";
import Box from "./Box";
import NewBox from "./NewBox";

export default class BoxList extends Component {
  state = {
    boxes: [{ width: "50px", height: "50px", color: "red" }],
  };

  addBox = (newBox) => {
    this.setState((st) => {
      return {
        boxes: [...st.boxes, newBox],
      };
    });
  };

  render() {
    return (
      <div>
        <NewBox create={this.addBox}/>
        {this.state.boxes.map((box,index) => (
          <Box key={index} width={box.width} height={box.height} color={box.color} />
          
        ))}
      </div>
    );
  }
}
