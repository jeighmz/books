import React from 'react';
import './App.css';
import Slider from './slider'
import Transition from './transitions'


function App() {
  return (
    <React.Fragment>
    <div style={{display:'flex', flexDirection:'column', position: "absolute", top: '0px', overflowY:'hidden'}}>
    <div id='current'>
      <div style={{backgroundColor:'rgba(150, 251, 196,1)', position:"relative", width:'100%', paddingTop:'12px'}}>
        <h2 style={{textAlign:'center'}}>you clicked on the link! cool.</h2>
        <p style={{textAlign:'center',position:'relative', top:'-17px',marginLeft:'50px',marginRight:'50px', fontSize:'12px', color:'rgba(0,0,0,0.7)'}}>peep the books i'm reading. COVID got me picking up books who knew it would be enjoyable.</p>
      </div> 
        <h2 style={{textAlign:'left', marginLeft:'25px',marginTop:'30px' }}>todays binges</h2>
        <p style={{textAlign:'center', fontSize:'25px', letterSpacing:'8px',color:'rgba(0,140,0,0.9)', position:'relative', top:'-15px'}}>~swipe cover~</p>
      

        <div style={{display: 'flex', flexDirection: 'column', alignItems:'center', justifyContent:'center', position:'relative', top: '0px'}}>
          <Slider description={'? what: methods of problem solving from personal to global scale'}>
            <img width='150px' height='225px' src={require('./book-covers/thinkinginsystems.jpg')}></img>
          </Slider>
          <div style={{position:'relative', top:'15px'}}>
            <p style={{textAlign:'center'}}>Thinking in Systems: A Primer</p>
            <p style={{position: 'relative', top: '-10px',textAlign:'center', fontSize:'12px', color:'rgba(0,0,0,0.9)'}}> by Donella H. Meadows</p>
          </div>
        </div>

    </div>

    <div style={{display:'flex', flexDirection:'column', position:'relative', top:'60px'}}>
      <div id='previous'>
          <h2 style={{textAlign:'left', marginLeft:'25px'}}>the knowledge trail</h2>
          <p style={{textAlign:'center', fontSize:'25px',letterSpacing:'8px', color:'rgba(0,140,0,0.9)', position:'relative', top:'-15px'}}>~tap cover~</p>
      </div>

      <div style={{display:'flex', flexDirection:'row', margin:'0 auto', width:'100%', justifyContent:'space-around', position: 'relative', top:'0px'}}>
        <div style={{position:'relative', top:'0px',width:'150px', height:'225px'}}>
          <Transition content={<img width='150px' height='225px' src={require('./book-covers/findingthingsout.jpg')}></img>} rating='? what: works by Feynman on nanotech to religion v science to building the atomic bomb' takeaways='. my take: this guy. this is my favorite guy. childlike curiosity w adult intuition and nonchalance.'></Transition>
        </div>
      </div>

      <div style={{display:'flex', flexDirection:'row', margin:'0 auto', width:'100%', justifyContent:'space-around', position:'relative', top:'20px'}}>
        <div style={{position:'relative', top:'0px',width:'150px', height:'225px'}}>
          <Transition content={<img width='150px' height='225px' src={require('./book-covers/dreamland.jpg')}></img>} rating='? what: autobiography from former Area-51 scientist who reverse engineered UFOs' takeaways='. my take: if you dont believe in aliens this will do it. his scienific POV is an engaging twist on a topic most people dismiss.'></Transition>
        </div>
        <div style={{position:'relative', top:'0px',width:'150px', height:'225px'}}>
          <Transition content={<img width='150px' height='225px' src={require('./book-covers/Measurewhatmatters.jpg')}></img>} rating='? what: the goal system Youtube, Google, and Intel used to boom' takeaways='. my take: my hyperfixations and many dreams needed a good infrastructure'></Transition>
        </div>
      </div>

      <div style={{display:'flex', flexDirection:'row', margin:'0 auto', width:'100%', justifyContent:'space-around', position: 'relative', top:'40px'}}>
        <div style={{position:'relative', top:'0px',width:'150px', height:'225px'}}>
          <Transition content={<img width='150px' height='225px' src={require('./book-covers/thefouragreements.jpg')}></img>} rating='? what: thousands of years of toltec knowledge on a virtuous lifestyle' takeaways='. my take: the agreements are decievingly simple to be such precious knowledge - ancient culture needs more credit.'></Transition>
        </div>
        <div style={{position:'relative', top:'0px',width:'150px', height:'225px'}}>
          <Transition content={<img width='150px' height='225px' src={require('./book-covers/lifelessonsbrainsurgeon.jpg')}></img>} rating='? what: stuff on brain surgery and all things related brain' takeaways='. my take: 42% of people who get shot in the head survive. 😳'></Transition>
        </div>

      </div>
      <div style={{display:'flex', flexDirection:'row', margin:'0 auto', width:'100%', justifyContent:'space-around', position: 'relative', top:'60px'}}>
        <div style={{position:'relative', top:'0px',width:'150px', height:'225px'}}>
          <Transition content={<img width='150px' height='225px' src={require('./book-covers/book-five-rings.jpg')}></img>} rating='? what: practices of strategy from 17th century Japanese master swordsman' takeaways='. my take: each scroll: Earth, Water, Fire, Wind and Void make for amazing parallels bewteen nature and crushing the opponent.'></Transition>
        </div>
        <div style={{position:'relative', top:'0px',width:'150px', height:'225px'}}>
          <Transition content={<img width='150px' height='225px' src={require('./book-covers/do_polarbears_get_lonely.jpg')}></img>} rating='? what: fifteen years worth of fun facts confirmed by NewScientist magazine' takeaways='. my take: big let down. the cover was intriguing, but all of the facts were either common sense or completely useless. We all know money has OD germs.'></Transition>
        </div>
      </div>
      <div style={{display:'flex', flexDirection:'row', margin:'0 auto', width:'100%', justifyContent:'space-around', position: 'relative', top:'80px'}}>
        <div style={{position:'relative', top:'0px',width:'150px', height:'225px'}}>
          <Transition content={<img width='150px' height='225px' src={require('./book-covers/something-deeply-hidden.jpg')}></img>} rating='? what: theoretical physics behind the possibility of a multiverse' takeaways='. my take: overwhelming amount of particle physics, but besides that Many-Worlds theory is pretty convincing 😅'></Transition>
        </div>
        <div style={{position:'relative', top:'0px',width:'150px', height:'225px'}}>
          <Transition content={<img width='150px' height='225px' src={require('./book-covers/cradle-to-cradle.jpg')}></img>} rating='? what: revolutionary model on eco-friendliness and effectiveness of design' takeaways='. my take: why do we always work against nature as if its not the best model for creation - imagine a world with no singing birds... sad'></Transition>
        </div>
      </div>
      <div style={{display:'flex', flexDirection:'row', margin:'0 auto', width:'100%', justifyContent:'space-around',  position: 'relative', top:'100px'}}>
        <div style={{position:'relative', top:'0px',width:'150px', height:'225px'}}>
          <Transition content={<img width='150px' height='225px' src={require('./book-covers/brief_history_time.jpg')}></img>} rating='? what: everything from time travel to black holes and the place of God in physics' takeaways='. my take: respect he wrote this while struggling with ALS - where there is life there is hope'></Transition>
        </div>
        <div style={{position:'relative', top:'0px',width:'150px', height:'225px'}}>
          <Transition content={<img width='150px' height='225px' src={require('./book-covers/briefer_history_time.jpg')}></img>} rating='? what: original but with prettier pictures and smaller sentences' takeaways='. my take: published couple decades after but still so much unknown in physics '></Transition>
        </div>
      </div>
      <div style={{display:'flex', flexDirection:'row', margin:'0 auto', width:'100%', justifyContent:'space-around', position: 'relative', top:'120px'}}>
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
