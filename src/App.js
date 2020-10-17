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
          <Slider description={'? what: quantum physics and the possibility of a multiverse.'}>
            <img width='150px' height='225px' src={require('./book-covers/something-deeply-hidden.jpg')}></img>
          </Slider>
          <div style={{position:'relative', top:'15px'}}>
            <p style={{textAlign:'center'}}>Something Deeply Hidden</p>
            <p style={{position: 'relative', top: '-10px', textAlign:'center', fontSize:'11px', color:'rgba(0,0,0,0.9)'}}> by Sean Carroll</p>
          </div>
        </div>

        <div style={{display: 'flex', flexDirection: 'column', alignItems:'center', justifyContent:'center', position:'relative', top: '20px'}}>
          <Slider description={'? what: practices of strategy from 17th century Japanese master swordsman'}>
            <img width='150px' height='225px' src={require('./book-covers/book-five-rings.jpg')}></img>
          </Slider>
          <div style={{position:'relative', top:'15px'}}>
            <p style={{textAlign:'center'}}>The Complete Book of Five Rings </p>
            <p style={{position: 'relative', top: '-10px',textAlign:'center', fontSize:'11px', color:'rgba(0,0,0,0.9)'}}> by Miyamoto Musashi edited by Kenji Tokitsu</p>
          </div>
        </div>

        <div style={{display: 'flex', flexDirection: 'column', alignItems:'center',  position:'relative', top: '40px'}}>
          <Slider description={'? what: revolutionary model on eco-friendliness and effectiveness of design'}>
            <img width='150px' height='225px' src={require('./book-covers/cradle-to-cradle.jpg')}></img>
          </Slider>
          <div style={{position:'relative', top:'15px'}}>
            <p style={{textAlign:'center'}}>Cradle to Cradle</p>
            <p style={{position: 'relative', top: '-10px',textAlign:'center', fontSize:'11px', color:'rgba(0,0,0,0.9)'}}> by William Mcdonough & Michael Braungart </p>
          </div>
        </div>
    </div>

    <div style={{display:'flex', flexDirection:'column', alignItems:'center', position:'relative', top:'60px'}}>
      <div id='previous'>
          <h3 style={{textAlign:'center'}}>the knowledge trail</h3>
      </div>
      <div style={{display:'flex', flexDirection:'row', margin:'0 auto', width:'100%', justifyContent:'space-around'}}>
        <Slider description={'? what: everything from time travel to black holes and the place of God in physics'}>
          <img width='150px' height='225px' src={require('./book-covers/brief_history_time.jpg')}></img>
        </Slider>
        <Slider description={'? what: original but with prettier pictures and smaller sentences'}>
          <img width='150px' height='225px' src={require('./book-covers/briefer_history_time.jpg')}></img>
        </Slider>
      </div>
      <div style={{display:'flex', flexDirection:'row', margin:'0 auto', width:'100%', justifyContent:'space-around', position: 'relative', top:'20px'}}>
        <Slider description={'? what: lessons on how people held power through history from royalty to con artists'}>
          <img width='150px' height='225px' src={require('./book-covers/48-laws-of-power.jpg')}></img>
        </Slider>
        <Slider description={'? what: short stories about odd paths towards success'}>
          <img width='150px' height='225px' src={require('./book-covers/barking-up-wrong-tree.jpg')}></img>
        </Slider>
      </div>
    </div>
    </div>
    </React.Fragment>
  );
}

export default App;
