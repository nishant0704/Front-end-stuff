import React from "react";

class Form extends React.Component{
  render(){
    return(
      <div className="form-wrapper">
        <form className="form-inline">
          <input className="form-control" type="text" name="city" placeholder="Enter City Name"/>
          <input className="form-control" type="text" name="country" placeholder="Enter Country Code"/>
          <button className="btn btn-warning" type="submit">Get Weather</button>
        </form>
      </div>
    );
  }
}

export default Form;
