import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let city = "Madrid";
// ReactDOM.render takes to arguments, first the argument is the element we want to create, then the second argument is where we want to render that element
ReactDOM.render(
  // React.createElement(tag that we want to create, properties we want this element to have, any children)
  // Possible to render multiple elements using createElement calls by making adjustments to the third argument (children)
  // JSX (Javascript as XML) is a language extension that allows you to write tags directly in the javascript
  // Browser is not going to render tags automatically in the browser, but because we're using create React app there is a tool working behind the scenes called Babel. Babel lets you write code that is not supported yet (transpiler). It takes the tags and turns them into createElement calls. 
  // JSX looks like HTML, but it is kind of different. 
  <h1>Hello from {city}</h1>,
  document.getElementById('root')
);


