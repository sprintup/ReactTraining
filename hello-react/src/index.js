import React, { useState, useEffect } from 'react'; // incorporating useState hook. A hook is a function that allows you to add functionality to a component
import ReactDOM from 'react-dom';
import './index.css';


function Checkbox(){
  const [checked, setChecked] = useState(false);

  // another React hook, useEffect, allows us to perform side effects inside of our function components. The things that we want the component to do aside from return UI are called effects. (ex. alert, console.log, interaction with browser) -> these are not part of the render
  useEffect(() => {
    // this alert has nothing to do with the component or the DOM
    alert(`checked: ${checked.toString()}`);
  });
  return (
    <>
      <input type="checkbox" value={checked} onChange={() => 
        setChecked(checked => !checked)
      }/>
      {checked ? "checked" : "not checked"}
    </>
  );
}
// ReactDOM.render takes to arguments, first the argument is the element we want to create, then the second argument is where we want to render that element
ReactDOM.render(
  <Checkbox />,
  document.getElementById('root')
);
