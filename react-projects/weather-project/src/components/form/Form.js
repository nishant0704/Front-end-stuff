import React from "react";

class Form extends React.Component{
  render(){
    return(
      <div className="form-wrapper">
        <form className="form-inline" onSubmit={this.props.getWeatherData}>
          <input className="form-control" type="text" name="city" placeholder="Enter City Name" required/>
          <input className="form-control" type="text" name="country" placeholder="Enter Country Code" required/>
          <button className="btn btn-warning">Get Weather</button>
        </form>
      </div>
    );
  }
}

export default Form;
