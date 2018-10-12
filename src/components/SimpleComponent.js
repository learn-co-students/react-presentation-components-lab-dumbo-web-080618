import React, { Component } from 'react';

class SimpleComponent extends Component {

  constructor() {
    super()
    this.state = {
      mood: "happy"
    }
  }

  handleClick = () => {
    let mood = this.state.mood === "happy" ? "sad" : "happy"
    this.setState({mood})
  }

  render() {
    return (
      <div onClick={this.handleClick}>{this.state.mood}</div>
    );
  }
}

export default SimpleComponent;
