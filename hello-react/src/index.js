import React, { useState, useEffect } from 'react'; // incorporating useState hook. A hook is a function that allows you to add functionality to a component
import ReactDOM from 'react-dom';
import './index.css';

// the purpose of the GitHubUser is to fetch some data from Github API
function GitHubUser({login}) {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`https://api.github.com/users/${login}`)
    .then(res => res.json())
    .then(setData)
    .catch(console.error);
  }, []);
  if(data){
    return (
      <div>{JSON.stringify(data)}</div>
    )
  }
  return null;
}

function App() {
  return <GitHubUser login="moonhighway" />
}
// ReactDOM.render takes to arguments, first the argument is the element we want to create, then the second argument is where we want to render that element
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
