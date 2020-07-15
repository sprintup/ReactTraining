import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


// ReactDOM.render takes to arguments, first the argument is the element we want to create, then the second argument is where we want to render that element
ReactDOM.render(
  //React.createElement(tag that we want to create, properties we want this element to have, any children)
  // Possible to render multiple elements using createElement calls by making adjustments to the third argument (children)
  React.createElement("div", {style:{color:"red"}}, React.createElement("h1",null,"hi!")),
  document.getElementById('root')
);


