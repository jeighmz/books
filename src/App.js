import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
        <h1>you clicked on the link! cool.</h1>
        <div style={{display: 'flex', flexDirection: 'row', alignItems:'center', justifyContent:'center'}}>
          <img width='150px' height='225px' src={require('./book-covers/something-deeply-hidden.jpg')}></img>
          <p>Something Deeply Hidden by Sean Carroll</p>
        </div>
    </div>
  );
}

export default App;
