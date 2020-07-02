import React from 'react';
import logo from './logo.svg';
import './App.css';
import profileImage from './img/1.jpg';

function App() {
  return (
    <div className="App">
     <h1>MovieTime!</h1>
     <p>Tal Pardo- React Developer</p>
     <img src={profileImage} alt="tal rod" />
    </div>
  );
}

export default App;
