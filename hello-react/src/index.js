import React, { useState, useEffect } from 'react'; // incorporating useState hook. A hook is a function that allows you to add functionality to a component
import ReactDOM from 'react-dom';
import './index.css';

function App() {
  const [val, setVal] = useState("");
  const [val2, setVal2] = useState("");

  //useEffect will console log the value of each one of these fields
  useEffect(() => {
    console.log(`field 1: ${val}`)
  });

  useEffect(() => {
    console.log(`field 2: ${val2}`)
  });

  return (
    <>
      <label>
        Favorite Phrase:
        <input value={val} onChange={e => setVal(e.target.value)}/>
      </label>
      <br />
      <label>
        Second Favorite Phrase:
        <input value={val2} onChange={e => setVal2(e.target.value)}/>
      </label>
    </>
  )
}
// ReactDOM.render takes to arguments, first the argument is the element we want to create, then the second argument is where we want to render that element
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
