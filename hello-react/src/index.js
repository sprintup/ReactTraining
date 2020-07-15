import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const lakeList = [
  { id: "1", name: "Echo", trailhead: "Echo" },
  { id: "2", name: "Maud", trailhead: "Wrights" },
  { id: "3", name: "Velma", trailhead: "Bayview" },
];

function App({lakes}){
  return (
    <div>
      {lakes.map(lake =>(
        <div>
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


