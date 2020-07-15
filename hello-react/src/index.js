import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


// ReactDOM.render takes to arguments, first the argument is the element we want to create, then the second argument is where we want to render that element
ReactDOM.render(
  //React.createElement(tag that we want to create, properties we want this element to have, any children)
  React.createElement("h1", {style:{color:"red"}}, "Hello!"),
  document.getElementById('root')
);


