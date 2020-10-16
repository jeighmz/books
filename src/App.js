import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useSpring, animated, interpolate } from 'react-spring'
import { useGesture } from 'react-with-gesture'
import Slider from './slider'


function App() {
  return (
    <React.Fragment>
    <div style={{display:'flex', flexDirection:'column', position: "absolute", top: '0px'}}>
    <div id='current'>
        <h1 style={{textAlign:'center'}}>you clicked on the link! cool.</h1>
        <div style={{display: 'flex', flexDirection: 'column', alignItems:'center'}}>
          <Slider>
            <img width='150px' height='225px' src={require('./book-covers/something-deeply-hidden.jpg')}></img>
          </Slider>
          <div style={{position:'relative', top:'25px'}}>
            <p style={{textAlign:'center'}}>Something Deeply Hidden</p>
            <p style={{position: 'relative', top: '-10px', textAlign:'center', fontSize:'11px', color:'rgba(0,0,0,0.9)'}}> by Sean Carroll</p>
          </div>
        </div>

        <div style={{display: 'flex', flexDirection: 'column', alignItems:'center', justifyContent:'center', position:'relative', top: '20px'}}>
          <Slider>
            <img width='150px' height='225px' src={require('./book-covers/book-five-rings.jpg')}></img>
          </Slider>
          <div style={{position:'relative', top:'25px'}}>
            <p style={{textAlign:'center'}}>The Complete Book of Five Rings </p>
            <p style={{position: 'relative', top: '-10px',textAlign:'center', fontSize:'11px', color:'rgba(0,0,0,0.9)'}}> by Miyamoto Musashi edited by Kenji Tokitsu</p>
          </div>
        </div>

        <div style={{display: 'flex', flexDirection: 'column', alignItems:'center',  position:'relative', top: '40px'}}>
          <Slider>
            <img width='150px' height='225px' src={require('./book-covers/cradle-to-cradle.jpg')}></img>
          </Slider>
          <div style={{position:'relative', top:'25px'}}>
            <p style={{textAlign:'center'}}>Cradle to Cradle</p>
            <p style={{position: 'relative', top: '-10px',textAlign:'center', fontSize:'11px', color:'rgba(0,0,0,0.9)'}}> by William Mcdonough & Michael Braungart </p>
          </div>
        </div>
    </div>

    <div style={{display:'flex', flexDirection:'column', alignItems:'center', position:'relative', top:'60px'}}>
      <div id='previous'>
          <h3 style={{textAlign:'center'}}>the knowledge trail</h3>
      </div>
      <Slider>
        <img width='150px' height='225px' src={require('./book-covers/brief_history_time.jpg')}></img>
      </Slider>
    </div>
    </div>
    </React.Fragment>
  );
}

export default App;
