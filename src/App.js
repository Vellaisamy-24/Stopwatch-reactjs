import React, {useState} from 'react';
import Display from './Display';
import Button from './Button';
import './App.css';

function App() {
  const [timer, setTimer] = useState({hour:0,minutes:0,seconds:0,milliseconds:0});
  const [intervals, setIntervals] = useState();
  const [status, setStatus] = useState(0);

  const start = () => {
    run();
    setStatus(1);
    setIntervals(setInterval(run, 10));
  };

  var newMilliSeconds = timer.milliseconds
  var newSeconds = timer.seconds
  var newMinutes = timer.minutes
  var newHour = timer.hour

  const run = () => {
    if(newMinutes === 60){
      newHour++;
      newMinutes = 0;
    }
    if(newSeconds === 60){
      newMinutes++;
      newSeconds = 0;
    }
    if(newMilliSeconds === 100){
      newSeconds++;
      newMilliSeconds = 0;
    }
    newMilliSeconds++;
 return setTimer({hour:newHour, minutes:newMinutes, seconds:newSeconds, milliseconds:newMilliSeconds});
  };

  const stop = () => {
    clearInterval(intervals);
    setStatus(2);
  };

  const reset = () => {
   clearInterval(intervals);
    setStatus(0);
    setTimer({hour:0, minutes:0, seconds:0, milliseconds:0})
  };



  const resume = () => start();


  return (
    < >
  
     <div >
          <div>
               <Display timer={timer}/>
               <Button status={status} resume={resume} reset={reset} stop={stop} start={start}/>
          </div>
     </div>
     </>
  );
}

export default App;
