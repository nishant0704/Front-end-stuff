import React from "react";

function More(props){
  if(!props.warn){
    return null;
  }
  return(
    <div className="">
      {props.lat && <p>Lattitude:{props.lat}<span>&deg;</span></p>}
      {props.lon && <p>Longitude:{props.lon}<span>&deg;</span></p>}
    </div>
  );
}


class Weather extends React.Component{
  constructor(props){
    super(props);
    this.state={
      clicked:false
    }
    this.toggleClick = this.toggleClick.bind(this);
  }

  toggleClick(){
    this.setState(state =>({
      clicked: !state.clicked
    }));
  }
  render(){
    return(
      <div className="weather-wrapper">
        {this.props.city && this.props.country && <p>Location: {this.props.city},{this.props.country}</p>}
        {this.props.temperature && <p>Temperature: {this.props.temperature}<span>&deg;C</span></p>}
        {this.props.humidity && <p>Humidity: {this.props.humidity}<span>%</span></p>}
        {this.props.description && <p>Conditions: {this.props.description}</p>}
        {this.props.description &&
          <div>
           <button className="btn btn-success mb-2" onClick={this.toggleClick}>
            { this.state.clicked ? 'View Less' : 'View More' }
           </button>
           { this.state.clicked ? <More lat={this.props.lat} lon={this.props.lon} warn={this.state.clicked}/> : ''}
          </div>
          }
      </div>
    );
  }
}

export default Weather;
