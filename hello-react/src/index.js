import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


// ReactDOM.render takes to arguments, first the argument is the element we want to create, then the second argument is where we want to render that element
ReactDOM.render(
  //React.createElement(tag that we want to create, properties we want this element to have, any children)
  // Possible to render multiple elements using createElement calls by making adjustments to the third argument (children)
  React.createElement(
    "ul", 
  {style:{color:"red"}}, 
  React.createElement("li",null,"Hot Dogs"),
  React.createElement("li",null,"Hamburgers"),
  React.createElement("li",null,"Pizza"),
  React.createElement("li",null,"Sushi"),
  ),
  document.getElementById('root')
);


