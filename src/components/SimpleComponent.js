// Code SimpleComponent Here
import React, { Component } from 'react';

class SimpleComponent extends Component{
  
  state = {
    mood: 'happy'
  }
  
  handleClick(){
    this.setState({
      mood: 'sad'
    })
  }
  
  render(){
    
    return (
      <div onClick={this.handleClick.bind(this)}>{this.state.mood}</div>
      )
  }
  
  
}

export default SimpleComponent;