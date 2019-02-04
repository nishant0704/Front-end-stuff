import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  state = {
    persons : [
      {name:"Nishant",age:26},
      {name:"Shashank",age:20},
      {name:"Drago",age:18}
    ],
    showPerson:false
  }

  changeName = () => {
    this.setState({
      persons : [
        {name:"Nishant Rao",age:26},
        {name:"Shashank Rao",age:20},
        {name:"Drago T",age:18}
      ]
    });
  }

  showPersons = () => {
    const show = this.state.showPerson
    this.setState({showPerson:!show})
  }

  render() {
    const style={
      backgroundColor :'blue',
      border:'1px solid black',
      padding:'10px',
      color:'white',
      borderRadius:'5px',
      cursor:'pointer',
      marginTop:'5px',
    }
    let person = null;
    if(this.state.showPerson){
      person = (
        <div>
          <button style={style} onClick={this.changeName}>Change Name!</button>
          <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>I m an Engineer</Person>
          <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
          <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    )
    }
    return (
      <div className="App">
        <h1>Hello There</h1>
        <button style={style} onClick={this.showPersons}>Toggle Person</button>
        {person}
      </div>
    );
  }
}

export default App;
