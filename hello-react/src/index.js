import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Lake() {
  return (
    <h1>Lake!</h1>
  );
}

function SkiResort() {
  return (
    <h1>SkiResort!</h1>
  );
}

function App({name}){
  return (
    //React.Fragments are intended to be used to deal with the issue of adjacent components
    <>
      <h1>{name}</h1>
      <Lake />
      <SkiResort />
    </>
  );
}
// ReactDOM.render takes to arguments, first the argument is the element we want to create, then the second argument is where we want to render that element
//when the app is rendered, add the property 'season' for summer, or winter
ReactDOM.render(
  <App name ="GraphQL"/>,
  document.getElementById('root')
);


