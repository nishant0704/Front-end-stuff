import React, { Component } from 'react';
import Person from './Person/Person';
import Radium from 'radium';
import './App.css';

class App extends Component {
  state = {
    persons : [
      {id:1,name:"Nishant",age:26},
      {id:2,name:"Shashank",age:20},
      {id:3,name:"Drago",age:18}
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

  deletePerson = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons:persons})
  }

  render() {
    const center={
      textAlign:'center'
    }

    const style={
      backgroundColor :'blue',
      border:'1px solid black',
      padding:'10px',
      color:'black',
      borderRadius:'5px',
      cursor:'pointer',
      marginTop:'5px',

    }

    let person = null;
    if(this.state.showPerson){
      person = (
        <div>
          <button style={style} onClick={this.changeName}>Change Name!</button>
          {this.state.persons.map( (person, index) => {
            return <Person
            key={person.id}
            click={() => this.deletePerson(index)}
            name={person.name}
            age={person.age} />
          })}
      </div>
    );
    style.backgroundColor = 'purple';
    }

    let bg = [];
    if(this.state.persons.length <= 2){
      bg.push('neon1');
    }
    if(this.state.persons.length <= 1){
      bg.push('neon2');
    }
    return (
      <div style={center} className={bg.join(' ')}>
        <h1>Hello There</h1>
        <button style={style} onClick={this.showPersons}>Toggle Person</button>
        {person}
      </div>
    );
  }
}

export default App;
