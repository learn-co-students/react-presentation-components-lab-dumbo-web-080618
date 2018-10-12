// Code SimpleComponent Here
import React, {Component} from 'react'

export default class SimpleComponent extends Component{

  constructor(){
    super()
    this.state = {
      mood: "happy"
    }
  }


  handleClick = () => {
    let stateOfBeing = this.state.mood
    stateOfBeing === "happy" ? stateOfBeing = "sad" : stateOfBeing = "happy"

    this.setState({
      mood: stateOfBeing
    }, () => console.log(this.state.mood))

  }


  render(){
    return(
      <div onClick ={this.handleClick}>{this.state.mood}</div>
    )
  }

}




// In the components/SimpleComponent.js file, create a SimpleComponent component.
//
// The component should be declared as a class (instance of Component) so that it can carry state.
//
// The component should have a state property called mood that has a default value of happy.
//
// The component should simply render its current mood state to the page in a div.
//
// The component should implement a handleClick function that can serve as a callback to the <div>'s click event. When clicked, the component's mood should toggle between happy and sad states.
