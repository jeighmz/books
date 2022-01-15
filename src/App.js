import React from 'react';
import './App.css';
import Slider from './slider'
import Transition from './transitions'


function App() {
  return (
    <React.Fragment>
    <div className='App-container'>
    <div id='current'>
      <div className='App-header'>
        <h2 className='App-header'>welcome to the my book app!</h2>
        <p className='App-small-header'>peep the books i'm reading... or not. up to you.</p>
      </div>  
        <h2 className='App-mid-header'>Todays Binges</h2>
        <p className='Swipe-instr'>swipe bookcover</p>

        <div className='Current-read'>
          <Slider description={'💬 what: stories about what to expect from AI in the year 2041'}>
            <img width='150px' height='225px' src={require('./book-covers/ai2041.jpg')}></img>
          </Slider>
          <div style={{position:'relative', top:'15px'}}>
            <p style={{textAlign:'center'}}>AI 2041: 10 Visions for Our Future</p>
            <p className='Current-read-title'> by Kai-Fu Lee</p>
          </div>
        </div>

        <div className='Current-read'>
          <Slider description={'💬 what: methods of problem solving from personal to global scale'}>
            <img width='150px' height='225px' src={require('./book-covers/thinkinginsystems.jpg')}></img>
          </Slider>
          <div style={{position:'relative', top:'15px'}}>
            <p style={{textAlign:'center'}}>Thinking in Systems: A Primer</p>
            <p className='Current-read-title'> by Donella H. Meadows</p>
          </div>
        </div>
    </div>

    <div className='App-container' style={{position:'relative'}}>
      <div id='previous'>
          <h2 className='App-mid-header'>Previous Books</h2>
          <p className='Swipe-instr'>tap bookcover</p>
      </div>

      <div style={{display:'flex', flexDirection:'row', margin:'0 auto', width:'100%', justifyContent:'space-around', position: 'relative', top:'-20px'}}>
        <div style={{position:'relative', top:'0px',width:'150px', height:'225px'}}>
          <Transition content={<img width='150px' height='225px' src={require('./book-covers/sagan.jpg')}></img>} rating='💬 what: Sagans transcripts of his stand at the Gifford Lectures covering his view on God.' takeaways='💭 my take: more I read ab science n religion the more I find that everybody is equally in the dark searching for answers and hoping to connect their understanding w others.'></Transition>
        </div>
      </div>

      <div style={{display:'flex', flexDirection:'row', margin:'0 auto', width:'100%', justifyContent:'space-around', position: 'relative', top:'20px'}}>
        <div style={{position:'relative', top:'0px',width:'150px', height:'225px'}}>
          <Transition content={<img width='150px' height='225px' src={require('./book-covers/dalailama.jpg')}></img>} rating='💬 what: POV of being spiritual in a largely technological/ science lead society.' takeaways='💭 my take: science does have a way of making people nihilistic but the Dalai Lama provides alternative ways of analyzing such empirical data through parrallels of science and buddhism.'></Transition>
        </div>
        
        <div style={{position:'relative', top:'0px',width:'150px', height:'225px'}}>
          <Transition content={<img width='150px' height='225px' src={require('./book-covers/findingthingsout.jpg')}></img>} rating='💬 what: works by Feynman on nanotech to religion v science to building the atomic bomb' takeaways='💭 my take: this guy. this is my favorite guy. childlike curiosity w adult intuition and nonchalance.'></Transition>
        </div>
      </div>

      <div style={{display:'flex', flexDirection:'row', margin:'0 auto', width:'100%', justifyContent:'space-around', position:'relative', top:'40px'}}>
        <div style={{position:'relative', top:'0px',width:'150px', height:'225px'}}>
          <Transition content={<img width='150px' height='225px' src={require('./book-covers/dreamland.jpg')}></img>} rating='💬 what: autobiography from former Area-51 scientist who reverse engineered UFOs' takeaways='💭 my take: if you dont believe in aliens this will do it. his scienific POV is an engaging twist on a topic most people dismiss.'></Transition>
        </div>
        <div style={{position:'relative', top:'0px',width:'150px', height:'225px'}}>
          <Transition content={<img width='150px' height='225px' src={require('./book-covers/Measurewhatmatters.jpg')}></img>} rating='💬 what: the goal system Youtube, Google, and Intel used to boom' takeaways='💭 my take: my hyperfixations and many dreams needed a good infrastructure'></Transition>
        </div>
      </div>

      <div style={{display:'flex', flexDirection:'row', margin:'0 auto', width:'100%', justifyContent:'space-around', position: 'relative', top:'60px'}}>
        <div style={{position:'relative', top:'0px',width:'150px', height:'225px'}}>
          <Transition content={<img width='150px' height='225px' src={require('./book-covers/thefouragreements.jpg')}></img>} rating='💬 what: thousands of years of toltec knowledge on a virtuous lifestyle' takeaways='💭 my take: the agreements are decievingly simple to be such precious knowledge - ancient culture needs more credit.'></Transition>
        </div>
        <div style={{position:'relative', top:'0px',width:'150px', height:'225px'}}>
          <Transition content={<img width='150px' height='225px' src={require('./book-covers/lifelessonsbrainsurgeon.jpg')}></img>} rating='💬 what: stuff on brain surgery and all things related brain' takeaways='💭 my take: 42% of people who get shot in the head survive. 😳'></Transition>
        </div>

      </div>
      <div style={{display:'flex', flexDirection:'row', margin:'0 auto', width:'100%', justifyContent:'space-around', position: 'relative', top:'80px'}}>
        <div style={{position:'relative', top:'0px',width:'150px', height:'225px'}}>
          <Transition content={<img width='150px' height='225px' src={require('./book-covers/book-five-rings.jpg')}></img>} rating='💬 what: practices of strategy from 17th century Japanese master swordsman' takeaways='💭 my take: each scroll: Earth, Water, Fire, Wind and Void make for amazing parallels bewteen nature and crushing the opponent.'></Transition>
        </div>
        <div style={{position:'relative', top:'0px',width:'150px', height:'225px'}}>
          <Transition content={<img width='150px' height='225px' src={require('./book-covers/do_polarbears_get_lonely.jpg')}></img>} rating='💬 what: fifteen years worth of fun facts confirmed by NewScientist magazine' takeaways='💭 my take: big let down. the cover was intriguing, but all of the facts were either common sense or completely useless. We all know money has OD germs.'></Transition>
        </div>
      </div>
      <div style={{display:'flex', flexDirection:'row', margin:'0 auto', width:'100%', justifyContent:'space-around', position: 'relative', top:'100px'}}>
        <div style={{position:'relative', top:'0px',width:'150px', height:'225px'}}>
          <Transition content={<img width='150px' height='225px' src={require('./book-covers/something-deeply-hidden.jpg')}></img>} rating='💬 what: theoretical physics behind the possibility of a multiverse' takeaways='💭 my take: overwhelming amount of particle physics, but besides that Many-Worlds theory is pretty convincing 😅'></Transition>
        </div>
        <div style={{position:'relative', top:'0px',width:'150px', height:'225px'}}>
          <Transition content={<img width='150px' height='225px' src={require('./book-covers/cradle-to-cradle.jpg')}></img>} rating='💬 what: revolutionary model on eco-friendliness and effectiveness of design' takeaways='💭 my take: why do we always work against nature as if its not the best model for creation - imagine a world with no singing birds... sad'></Transition>
        </div>
      </div>
      <div style={{display:'flex', flexDirection:'row', margin:'0 auto', width:'100%', justifyContent:'space-around',  position: 'relative', top:'120px'}}>
        <div style={{position:'relative', top:'0px',width:'150px', height:'225px'}}>
          <Transition content={<img width='150px' height='225px' src={require('./book-covers/brief_history_time.jpg')}></img>} rating='💬 what: everything from time travel to black holes and the place of God in physics' takeaways='💭 my take: respect he wrote this while struggling with ALS - where there is life there is hope'></Transition>
        </div>
        <div style={{position:'relative', top:'0px',width:'150px', height:'225px'}}>
          <Transition content={<img width='150px' height='225px' src={require('./book-covers/briefer_history_time.jpg')}></img>} rating='💬 what: original but with prettier pictures and smaller sentences' takeaways='💭 my take: published couple decades after but still so much unknown in physics '></Transition>
        </div>
      </div>
      <div style={{display:'flex', flexDirection:'row', margin:'0 auto', width:'100%', justifyContent:'space-around', position: 'relative', top:'140px'}}>
        <div style={{position:'relative', top:'0px',width:'150px', height:'225px'}}>
          <Transition content={<img width='150px' height='225px' src={require('./book-covers/barking-up-wrong-tree.jpg')}></img>} rating='💬 what: short stories about odd paths towards success' takeaways='💭 my take: who knew you could learn lessons from pirates - inspiration is really everywhere'></Transition>
        </div>
        <div style={{position:'relative', top:'0px',width:'150px', height:'225px'}}>
          <Transition content={<img width='150px' height='225px' src={require('./book-covers/48-laws-of-power.jpg')}></img>} rating='💬 what: lessons on how people held power through history from royalty to con artists' takeaways='💭 my take: too much vicrotian era history - dude Greene is a little cynical and rubs off a God-complex'></Transition>
        </div>
      </div>
    </div>
    </div>
    </React.Fragment>
  );
}

export default App;
