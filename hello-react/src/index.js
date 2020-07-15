import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Lake({name}) {
  return (
    <div>
      <h1>Visit {name}!</h1>
    </div>
  );
}

function SkiResort({name}) {
  return (
    <div>
      <h1>Visit {name}!</h1>
    </div>
  );
}

function App(props){
  return (
    <div>
      {(props.season === "summer") ? (
        <Lake name="Jenny Lake" />
      ) : props.season ==="winter" ? (
        <SkiResort name="JHMR" />
      ) : (
        <h1>
          Come back in the winter or summer!
        </h1>
      )}
    </div>
  )
}
// ReactDOM.render takes to arguments, first the argument is the element we want to create, then the second argument is where we want to render that element
//when the app is rendered, add the property 'season' for summer, or winter
ReactDOM.render(
  <App season="summer"/>,
  document.getElementById('root')
);


