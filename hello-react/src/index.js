import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Hello(props){
  console.log(Object.keys(props)); // Object.keys( returns keys of the object -> [library, message, number])
  return (
    // Can wrap more than one tag in a set of paranthesis
    <div>
      <h1>Welcome to {props.library}!</h1>
      <p>{props.message}</p>
      <p>{Object.keys(props).length} Props Total</p> 
    </div>
  )
}
// ReactDOM.render takes to arguments, first the argument is the element we want to create, then the second argument is where we want to render that element
ReactDOM.render(
  // A component is a function that returns some UI (collection of React Elements). The self closing Hello JSX tags below call the fuction above. Also, components have to be capitalized
  // Props (properties) is an object in React that contain properties about the component. Can display dynamic data within a component.
  // 'React' library value accepts dynamic values (Next.js, Vue), so it'll update in the H1 (in this case React)
  // "Have Fun! is rendered in the paragraph tag"
  // Can pass functions to JSX Templates
  <Hello 
    library="React" 
    message="Have Fun!" 
    number={3} // "3 Props Total", unless you delete this line, then it is "2 Props Total"
  />,
  document.getElementById('root')
);


