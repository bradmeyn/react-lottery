import React, { Component } from "react";

class Ball extends Component {
  render() {
    const ballStyle = {
      height: "30px",
      padding: "20px",
      width: "30px",
      background: "#ffc6b0",
      fontSize: "26px",
      borderRadius: "50%",
      margin: "10px"
    };
    return <div style={ballStyle}>{this.props.value}</div>;
  }
}

export default Ball;
