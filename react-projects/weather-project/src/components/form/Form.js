import React from "react";
import './Form.css';

class Form extends React.Component{
  render(){
    return(
      <div className="form-wrapper mt-2">
        <form className="form-inline" onSubmit={this.props.getWeatherData}>
          <input className="form-input form-control mr-2" style={{width:'40%'}} type="text" name="city" placeholder="City Name" required/>
          <input className="form-input form-control ml-2 mr-2" style={{width:'35%'}} type="text" name="country" placeholder="Country Code" required/>
          <button className="btn btn-warning">Get Weather</button>
        </form>
      </div>
    );
  }
}

export default Form;
