import React, { useState } from 'react'; // incorporating useState hook. A hook is a function that allows you to add functionality to a component
import ReactDOM from 'react-dom';
import './index.css';


function App(){
  const [status] = useState("Open");

  //Status will be a state value that reflects the current status for this application
  return (
    <div>
      <h1>Status: {status}</h1> 
    </div>
  );
}
// ReactDOM.render takes to arguments, first the argument is the element we want to create, then the second argument is where we want to render that element
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
