import React, { useState } from 'react'; // incorporating useState hook. A hook is a function that allows you to add functionality to a component
import ReactDOM from 'react-dom';
import './index.css';


function App(){
  // initial status is open
  // useState returns a pair: 
  //  status = state value (Open) -> remmeber array destructuring is allowing us give this value a name
  //  second value is a function to update the state, we can call it setStatus
  const [manager, setManager] = useState("Alex");
  const [status, setStatus] = useState("Open");

  //Status will be a state value that reflects the current status for this application
  return (
    <>
    <div>
      <h1>Manager on Duty: {manager}</h1>
    </div>
    <div>
      <h1>Status: {status}</h1> 
      <button onClick={() => setStatus("Open")}>Open</button>
      <button onClick={() => setStatus("Closed")}>Closed</button>
    </div>
    </>
  );
}
// ReactDOM.render takes to arguments, first the argument is the element we want to create, then the second argument is where we want to render that element
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
