import React from 'react';
import Radium from 'radium';
import './Person.css';

const person = (props) => {
  return (
    <div className="Person">
      <p onClick={props.click}>I am {props.name}  and i am  {props.age} years old.</p>
      <p>{props.children}</p>
    </div>
  )
};

export default Radium(person);
