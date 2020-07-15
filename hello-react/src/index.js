import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const lakeList = [
  { id: "1", name: "Echo", trailhead: "Echo" },
  { id: "2", name: "Maud", trailhead: "Wrights" },
  { id: "3", name: "Velma", trailhead: "Bayview" },
];

function App({lakes}){
  // working on removing the error about each child needing a unique key property. Need to add a key. Keys help React keep track of which items have changed (added, removed). A key is an identifier for a dynamically generated element. 
  return (
    <div>
      {lakes.map(lake =>(
        <div key={lake.id}>
          <h2>{lake.name}</h2>
          <p>Accessed by: {lake.trailhead}</p>
        </div>
      ))}
    </div>
  )
}
// ReactDOM.render takes to arguments, first the argument is the element we want to create, then the second argument is where we want to render that element
ReactDOM.render(
  <App lakes={lakeList}/>,
  document.getElementById('root')
);


