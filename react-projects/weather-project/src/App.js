import React, { Component } from 'react';
import Title from '../src/components/title/Title';
import Form from '../src/components/form/Form';
import Weather from '../src/components/weather/Weather';
import './App.css';

const API_KEY = "0246beccae85627664c3f84a8c49b8fc";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Title/>
        <Form/>
        <Weather/>
      </div>
    );
  }
}

export default App;
