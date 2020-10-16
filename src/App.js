import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
        <h1>you clicked on the link! cool.</h1>
        
        <div style={{display: 'flex', flexDirection: 'column', alignItems:'center'}}>
          <img width='150px' height='225px' src={require('./book-covers/something-deeply-hidden.jpg')}></img>
          <p style={{textAlign:'center'}}>Something Deeply Hidden</p>
          <p style={{position: 'relative', top: '-20px', textAlign:'center', fontSize:'11px', color:'rgba(0,0,0,0.9)'}}> by Sean Carroll</p>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', alignItems:'center', justifyContent:'center', position:'relative', top: '5px'}}>
          <img width='150px' height='225px' src={require('./book-covers/book-five-rings.jpg')}></img>
          <p style={{textAlign:'center'}}>The Complete Book of Five Rings </p>
          <p style={{position: 'relative', top: '-20px',textAlign:'center', fontSize:'11px', color:'rgba(0,0,0,0.9)'}}> by Miyamoto Musashi edited by Kenji Tokitsu</p>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', alignItems:'center',  position:'relative', top: '15px'}}>
          <img width='150px' height='225px' src={require('./book-covers/cradle-to-cradle.jpg')}></img>
          <p style={{textAlign:'center'}}>Cradle to Cradle</p>
          <p style={{position: 'relative', top: '-20px',textAlign:'center', fontSize:'11px', color:'rgba(0,0,0,0.9)'}}> by William Mcdonough & Michael Braungart </p>
        </div>

    </div>
  );
}

export default App;
