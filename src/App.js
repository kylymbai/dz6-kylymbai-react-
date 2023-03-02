import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       names: ['Argen', 'Talant', 'Janara']
    }
   
  }


  
  render() {
    return (
      <div>
        <ul>{this.state.names.map(name => <li>{name}</li>)}</ul>
      </div>
    )
  }
}
