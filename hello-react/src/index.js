import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Hello(){
  return (
    // Can wrap more than one tag in a set of paranthesis
    <div>
      <h1>Welcome to React!</h1>
      <p>Let's build something cool.</p>
    </div>
  )
}
// ReactDOM.render takes to arguments, first the argument is the element we want to create, then the second argument is where we want to render that element
ReactDOM.render(
  // A component is a function that returns some UI (collection of React Elements). The self closing Hello JSX tags below call the fuction above. Also, components have to be capitalized
  <Hello />,
  document.getElementById('root')
);


