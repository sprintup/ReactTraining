import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Lake() {
  return (
    <div>
      <h1>Visit Jenny Lake!</h1>
    </div>
  );
}

function SkiResort() {
  return (
    <div>
      <h1>Visit Jackson Hole Mountain Resort!</h1>
    </div>
  );
}

function App(props){
  if(props.season === "summer"){
    return <Lake />;
  } else if (props.season === "winter"){
    return <SkiResort />;
  }
}
// ReactDOM.render takes to arguments, first the argument is the element we want to create, then the second argument is where we want to render that element
//when the app is rendered, add the property 'season' for summer, or winter
ReactDOM.render(
  <App season="summer"/>,
  document.getElementById('root')
);


