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
        <p style={{textAlign:'center', margin:'25px', fontSize:'12px', color:'rgba(0,0,0,0.7)'}}>peep the books i'm reading. COVID got me picking up books who knew it would be enjoyable.</p>
        <h2 style={{textAlign:'center' }}>todays binges</h2>
        <p style={{textAlign:'center', fontSize:'11px', color:'rgba(0,125,0,0.9)', position:'relative', top:'-15px'}}>~swipe~</p>
        
        <div style={{display: 'flex', flexDirection: 'column', alignItems:'center', justifyContent:'center', position:'relative', top: '0px'}}>
          <Slider description={'? what: practices of strategy from 17th century Japanese master swordsman'}>
            <img width='150px' height='225px' src={require('./book-covers/book-five-rings.jpg')}></img>
          </Slider>
          <div style={{position:'relative', top:'15px'}}>
            <p style={{textAlign:'center'}}>The Complete Book of Five Rings </p>
            <p style={{position: 'relative', top: '-10px',textAlign:'center', fontSize:'12px', color:'rgba(0,0,0,0.9)'}}> by Miyamoto Musashi edited by Kenji Tokitsu</p>
          </div>
        </div>

        <div style={{display: 'flex', flexDirection: 'column', alignItems:'center', justifyContent:'center', position:'relative', top: '20px'}}>
          <Slider description={'? what: fifteen years worth of fun facts confirmed by NewScientist magazine'}>
            <img width='150px' height='225px' src={require('./book-covers/do_polarbears_get_lonely.jpg')}></img>
          </Slider>
          <div style={{position:'relative', top:'15px'}}>
            <p style={{textAlign:'center'}}>Do Polar Bears Get Lonely? </p>
            <p style={{position: 'relative', top: '-10px',textAlign:'center', fontSize:'12px', color:'rgba(0,0,0,0.9)'}}> by NewScientist edited by Mike O'Hare</p>
          </div>
        </div>

        <div style={{display: 'flex', flexDirection: 'column', alignItems:'center', justifyContent:'center', position:'relative', top: '40px'}}>
          <Slider description={'? what: memoir from former CIA director covering 30 years in government'}>
            <img width='150px' height='225px' src={require('./book-covers/undaunted.jpg')}></img>
          </Slider>
          <div style={{position:'relative', top:'15px'}}>
            <p style={{textAlign:'center'}}>Undaunted</p>
            <p style={{position: 'relative', top: '-10px',textAlign:'center', fontSize:'12px', color:'rgba(0,0,0,0.9)'}}> by John O. Brennan</p>
          </div>
        </div>
    </div>

    <div style={{display:'flex', flexDirection:'column', alignItems:'center', position:'relative', top:'60px'}}>
      <div id='previous'>
          <h3 style={{textAlign:'center'}}>the knowledge trail</h3>
          <p style={{textAlign:'center', fontSize:'11px', color:'rgba(0,125,0,0.9)', position:'relative', top:'-15px'}}>~tap~</p>
      </div>

      <div style={{display:'flex', flexDirection:'row', margin:'0 auto', width:'100%', justifyContent:'space-around', position: 'relative', top:'0px'}}>
        <div style={{position:'relative', top:'0px',width:'150px', height:'225px'}}>
          <Transition content={<img width='150px' height='225px' src={require('./book-covers/something-deeply-hidden.jpg')}></img>} rating='? what: theoretical physics behind the possibility of a multiverse' takeaways='. my take: overwhelming amount of particle physics, but besides that Many-Worlds theory is pretty convincing 😅'></Transition>
        </div>
        <div style={{position:'relative', top:'0px',width:'150px', height:'225px'}}>
          <Transition content={<img width='150px' height='225px' src={require('./book-covers/cradle-to-cradle.jpg')}></img>} rating='? what: revolutionary model on eco-friendliness and effectiveness of design' takeaways='. my take: why do we always work against nature as if its not the best model for creation - imagine a world with no singing birds... sad'></Transition>
        </div>
      </div>
      <div style={{display:'flex', flexDirection:'row', margin:'0 auto', width:'100%', justifyContent:'space-around',  position: 'relative', top:'20px'}}>
        <div style={{position:'relative', top:'0px',width:'150px', height:'225px'}}>
          <Transition content={<img width='150px' height='225px' src={require('./book-covers/brief_history_time.jpg')}></img>} rating='? what: everything from time travel to black holes and the place of God in physics' takeaways='. my take: respect he wrote this while struggling with ALS - where there is life there is hope'></Transition>
        </div>
        <div style={{position:'relative', top:'0px',width:'150px', height:'225px'}}>
          <Transition content={<img width='150px' height='225px' src={require('./book-covers/briefer_history_time.jpg')}></img>} rating='? what: original but with prettier pictures and smaller sentences' takeaways='. my take: published couple decades after but still so much unknown in physics '></Transition>
        </div>
      </div>
      <div style={{display:'flex', flexDirection:'row', margin:'0 auto', width:'100%', justifyContent:'space-around', position: 'relative', top:'40px'}}>
        <div style={{position:'relative', top:'0px',width:'150px', height:'225px'}}>
          <Transition content={<img width='150px' height='225px' src={require('./book-covers/barking-up-wrong-tree.jpg')}></img>} rating='? what: short stories about odd paths towards success' takeaways='. my take: who knew you could learn lessons from pirates - inspiration is really everywhere'></Transition>
        </div>
        <div style={{position:'relative', top:'0px',width:'150px', height:'225px'}}>
          <Transition content={<img width='150px' height='225px' src={require('./book-covers/48-laws-of-power.jpg')}></img>} rating='? what: lessons on how people held power through history from royalty to con artists' takeaways='. my take: too much vicrotian era history - dude Greene is a little cynical and rubs off a God-complex'></Transition>
        </div>
      </div>
    </div>
    </div>
    </React.Fragment>
  );
}

export default App;
