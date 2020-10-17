import React from 'react';
import './App.css';
import Slider from './slider'
import Transition from './transitions'


function App() {
  return (
    <React.Fragment>
    <div style={{display:'flex', flexDirection:'column', position: "absolute", top: '0px'}}>
    <div id='current'>
        <h2 style={{textAlign:'center'}}>you clicked on the link! cool.</h2>
        <h3 style={{textAlign:'center'}}>todays binges</h3>
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
        <div style={{position:'relative', top:'0px',width:'150px', height:'225px'}}>
          <Transition content={<img width='150px' height='225px' src={require('./book-covers/brief_history_time.jpg')}></img>} rating='? what: everything from time travel to black holes and the place of God in physics' takeaways='. my take: respect he wrote this while struggling with ALS - where there is life there is hope'></Transition>
        </div>
        <div style={{position:'relative', top:'0px',width:'150px', height:'225px'}}>
          <Transition content={<img width='150px' height='225px' src={require('./book-covers/briefer_history_time.jpg')}></img>} rating='? what: original but with prettier pictures and smaller sentences' takeaways='. my take: published couple decades after but still so much unknown in physics '></Transition>
        </div>
      </div>
      <div style={{display:'flex', flexDirection:'row', margin:'0 auto', width:'100%', justifyContent:'space-around', position: 'relative', top:'20px'}}>
        <div style={{position:'relative', top:'0px',width:'150px', height:'225px'}}>
          <Transition content={<img width='150px' height='225px' src={require('./book-covers/48-laws-of-power.jpg')}></img>} rating='? what: lessons on how people held power through history from royalty to con artists' takeaways='. my take: too much vicrotian era history - dude Greene is a little cynical and rubs off a God-complex'></Transition>
        </div>
        <div style={{position:'relative', top:'0px',width:'150px', height:'225px'}}>
          <Transition content={<img width='150px' height='225px' src={require('./book-covers/barking-up-wrong-tree.jpg')}></img>} rating='? what: short stories about odd paths towards success' takeaways='. my take: who knew you could learn lessons from pirates - inspiration is really everywhere'></Transition>
        </div>
      </div>
    </div>
    </div>
    </React.Fragment>
  );
}

export default App;
