import React, { Component } from 'react';
import Title from '../src/components/title/Title';
import Form from '../src/components/form/Form';
import Weather from '../src/components/weather/Weather';
import './App.css';

const API_KEY = "0246beccae85627664c3f84a8c49b8fc";

class App extends Component {
  state={
    temperature:'',
    city:'',
    country:'',
    humidity:'',
    description:'',
    lat:'',
    lon:''
  }
  getWeatherData = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    console.log(data);
    this.setState({
      temperature:data.main.temp,
      city:data.name,
      country:data.sys.country,
      humidity:data.main.humidity,
      description:data.weather[0].description,
      lat:data.coord.lat,
      lon:data.coord.lon
    });
  }
  render() {
    return (
      <div className="wrapper">
        <div className="main">
          <div className="row">
            <div className="col-5 pr-0">
              <Title/>
            </div>
            <div className="col-7" style={{backgroundColor:"#1E1A1A"}}>
              <Form getWeatherData={this.getWeatherData}/>
              <Weather
              temperature={this.state.temperature}
              city={this.state.city}
              country={this.state.country}
              humidity={this.state.humidity}
              description={this.state.description}
              lat={this.state.lat}
              lon={this.state.lon}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default App;
