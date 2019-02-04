import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  state = {
    persons : [
      {name:"Nishant",age:26},
      {name:"Shashank",age:20},
      {name:"Drago",age:18}
    ]
  }
  render() {
    return (
      <div className="App">
        <h1>Hello There</h1>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>I m an Engineer</Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
