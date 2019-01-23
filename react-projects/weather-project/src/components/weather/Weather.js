import React from "react";

class Weather extends React.Component{
  render(){
    return(
      <div className="weather-wrapper">
        {this.props.city && this.props.country && <p>Location: {this.props.city}, {this.props.country}</p>}
        {this.props.temperature && <p>Temperature: {this.props.temperature}<span>&deg;C</span></p>}
        {this.props.humidity && <p>Humidity: {this.props.humidity}<span>%</span></p>}
        {this.props.description && <p>Conditions: {this.props.description}</p>}
      </div>
    );
  }
}

export default Weather;
