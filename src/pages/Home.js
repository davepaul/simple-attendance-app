import React from "react";
import logo from '../logo.svg';
// import {
//   useParams
// } from "react-router-dom";

function Home() {
  // let { id } = useParams();
  console.log(process.env.REACT_APP_URL);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          
          Edit <code>src/App.js</code> and save to reload.
          {process.env.NODE_ENV}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default Home;