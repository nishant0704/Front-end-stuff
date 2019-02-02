import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello There</h1>
        <Person name="Nishant" age="26">I m an Engineer</Person>
        <Person name="Shashank" age="20"/>
        <Person name="Drago" age="18"/>
      </div>
    );
  }
}

export default App;
