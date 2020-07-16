import React, { useState, useEffect } from 'react'; // incorporating useState hook. A hook is a function that allows you to add functionality to a component
import ReactDOM from 'react-dom';
import './index.css';

function App() {
  const [val, setVal] = useState("");
  const [val2, setVal2] = useState("");

  //useEffect will console log the value of each one of these fields
  // the second argument sent to useEffect is called the dependency array. In the array you use the state variable that we want to listen for changes in. In other words this useEffect is only going to fire when the changing first value
  useEffect(() => {
    console.log(`field 1: ${val}`)
  },[val]);

  useEffect(() => {
    console.log(`field 2: ${val2}`)
  },[val2]);

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
