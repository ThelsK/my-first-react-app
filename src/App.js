import React from 'react';
import logo from './logo.svg';
import Title from './components/Title'
import LightSwitch from './components/LightSwitch'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to Codaisseur!
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
      <main>
        <Title content="Awesome Title" />
        <LightSwitch />
      </main>
    </div>
  );
}

export default App;
