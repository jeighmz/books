import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
        <h1>you clicked on the link! cool.</h1>
        
        <div style={{display: 'flex', flexDirection: 'row', alignItems:'center', justifyContent:'flex-start'}}>
          <img width='150px' height='225px' src={require('./book-covers/something-deeply-hidden.jpg')}></img>
          <p>Something Deeply Hidden by Sean Carroll</p>
        </div>
        <div style={{display: 'flex', flexDirection: 'row', alignItems:'center', justifyContent:'flex-start', position:'relative', top: '10px'}}>
          <img width='150px' height='225px' src={require('./book-covers/book-five-rings.jpg')}></img>
          <p>The Complete Book of Five Rings by Miyamoto Musashi edited by Kenji Tokitsu</p>
        </div>
        <div style={{display: 'flex', flexDirection: 'row', alignItems:'center', justifyContent:'flex-start',  position:'relative', top: '20px'}}>
          <img width='150px' height='225px' src={require('./book-covers/cradle-to-cradle.jpg')}></img>
          <p>Cradle to Cradle by William Mcdonough & Michael Braungart</p>
        </div>

    </div>
  );
}

export default App;
