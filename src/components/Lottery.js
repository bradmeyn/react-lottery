import React, { Component } from "react";
import Ball from "./Ball";

export class Lottery extends Component {
  static defaultProps = {
    numBalls: 5,
    maxNum: 100
  };
  constructor(props) {
    super(props);
    this.state = {
      numbers: []
    };
    this.generateNum = this.generateNum.bind(this);
  }

  generateNum() {
    const newBalls = [];
    for (let i = 0; i < this.props.numBalls; i++) {
      let value = Math.floor(Math.random() * this.props.maxNum + 1);
      newBalls.push(value);
    }

    this.setState({
      numbers: newBalls
    });
  }

  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          border: "solid 5px steelBlue",
          width: "600px",
          height: "400px"
        }}
      >
        <h1 style={{ margin: "3px" }}>Brad Lotto</h1>
        <div style={{ margin: "3px", display: "flex" }}>
          {this.state.numbers.map((ball) => {
            return <Ball value={ball} />;
          })}
        </div>
        <button
          style={{
            margin: "10px",
            width: "100px",
            padding: "10px",
            cursor: "pointer",
            border: "none",
            borderRadius: "10px",
            fontSize: "18px",
            background: "lightGreen"
          }}
          onClick={this.generateNum}
        >
          Generate Numbers
        </button>
      </div>
    );
  }
}

export default Lottery;
