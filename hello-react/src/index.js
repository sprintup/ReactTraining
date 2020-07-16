import React, { useState, useEffect } from 'react'; // incorporating useState hook. A hook is a function that allows you to add functionality to a component
import ReactDOM from 'react-dom';
import './index.css';

function Checkbox() {
  const [checked, setChecked] = useState(false);
  // reducer function: takes in the current state and returns a new state
  function toggle() {
    setChecked(checked => !checked)
  }
  return(
    <>
    <input 
      type="checkbox" 
      value="checked"
      onChange={toggle}
    />
    {checked ? "checked" : "not checked"}
    </>
  );
}


// ReactDOM.render takes to arguments, first the argument is the element we want to create, then the second argument is where we want to render that element
ReactDOM.render(
  <Checkbox />,
  document.getElementById('root')
);
