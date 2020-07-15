import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const lakeList = [
  { id: "1", name: "Echo", trailhead: "Echo" },
  { id: "2", name: "Maud", trailhead: "Wrights" },
  { id: "3", name: "Velma", trailhead: "Bayview" },
];

const list = [1, 2, 3, 4, 5]; // How to add a key for a list of numbers

function App({items}){
  // working on removing the error about each child needing a unique key property. Need to add a key. Keys help React keep track of which items have changed (added, removed). A key is an identifier for a dynamically generated element. 
  return (
    <ul>
      {items.map(item =>(
        <li key={item.toString()}>{item}</li>
      ))}
    </ul>
  )
}
// ReactDOM.render takes to arguments, first the argument is the element we want to create, then the second argument is where we want to render that element
ReactDOM.render(
  <App items={list}/>,
  document.getElementById('root')
);


