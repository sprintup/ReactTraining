import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const lakeList = [
  "Echo Lake",
  "Maud Lake",
  "Cascade Lake",
];

function App({lakes}){
  return (
    <ul>
      {lakes.map(lake => (
      <li>{lake}</li>
      ))}
    </ul>
  )
}
// ReactDOM.render takes to arguments, first the argument is the element we want to create, then the second argument is where we want to render that element
ReactDOM.render(
  <App lakes={lakeList}/>,
  document.getElementById('root')
);


