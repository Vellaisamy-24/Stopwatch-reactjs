import React, { useState, useEffect } from "react";

 const Count = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const startCountdown = () => {
    setIsRunning(true);
  };

  const pauseCountdown = () => {
    setIsRunning(false);
  };

  const resetCountdown = () => {
    setIsRunning(false);
    setHours(0);
    setMinutes(0);
    setSeconds(0);
  };

  useEffect(() => {
    let totalSeconds = hours * 3600 + minutes * 60 + seconds;
    
    const countdownInterval = setInterval(() => {
      if (totalSeconds > 0 && isRunning) {
        totalSeconds -= 1;
        setHours(Math.floor(totalSeconds / 3600));
        setMinutes(Math.floor((totalSeconds % 3600) / 60));
        setSeconds(totalSeconds % 60);
      } else {
        setIsRunning(false);
        clearInterval(countdownInterval);
      }
    }, 1000);

    return () => {
      clearInterval(countdownInterval);
    };
  }, [hours, minutes, seconds, isRunning]);

  function formatTime(time) {
    return time < 10 ? `0${time}` : time;
  }

  return (
    <>

    <div className="flex items-center justify-center h-screen">
   
   

    <div className="  sm:w-[600px] md:w-[700px] mb1:w-[360px]  " >
           <div className="text-center mb1:text-[40px] mb1:mb-[20px] font-montserrat   lg:text-[50px] lg:mb-[70px]  bg-violet-500 text-white rounded-[10px] font-bold shadow-lg">Count Down Timer</div>
           <div className="grid grid-cols-3 text-[20px] text-center ">
            <div className="">
            <p className="sm:text-[20px] md:text-[30px] lg:text-[40px] mb1:text-[20px] bg-blue-100 text-orange-500" >{formatTime(hours)}</p>
          <span className=" font-bold sm:text-[30px] md:text-[35px] lg:text-[45px] mb1:text-[20px] font-exquisite">Hours</span>
            </div>
      
        
      <div className="">
      <p className="  sm:text-[20px] md:text-[30px] lg:text-[40px] mb1:text-[20px] bg-blue-100 text-orange-500 ">{formatTime(minutes)}</p>
          <span className=" font-bold sm:text-[30px] md:text-[35px] lg:text-[45px] mb1:text-[20px] font-exquisite">mins</span>
      </div>
         
        <div>
        <p className="sm:text-[20px]   md:text-[30px] lg:text-[40px] mb1:text-[20px] bg-blue-100 text-orange-500 " >{formatTime(seconds)}</p>
          <span className=" font-bold sm:text-[30px] md:text-[35px] lg:text-[45px] mb1:text-[20px] font-exquisite">seconds</span>
        
        </div>
        
    
     
      </div>
      <div className=" text-center m-[50px] ">
        <input className="  border border-[1px] mb1:w-[60px] sm:w-[150px]  mb1:mr-[20px] p-[5px]  "   type="number"     placeholder="Hours"  onChange={(e) => setHours(parseInt(e.target.value, 10))}   />
        <input  className=" border border-[1px] mb1:w-[60px] sm:w-[150px]  mb1:mr-[20px]   p-[5px]  "  type="number"  placeholder="Minutes"   onChange={(e) => setMinutes(parseInt(e.target.value, 10))}    />
        <input  className="  border border-[1px] mb1:w-[60px] sm:w-[150px]  mb1:mr-[20px]  p-[5px]   "   type="number"      placeholder="Seconds"   onChange={(e) => setSeconds(parseInt(e.target.value, 10))}      />   
        </div> 
        <div className="text-[20px] text-center mt-[10px] ">
        <button className=" shadow-lg  sm:w-[70px] lg:w-[90px] mb1:mr-[10px]  p-[10px] rounded-[6px] sm:mr-[20px] lg:mr-[40px] bg-green-500 text-white hover:text-green-500 transition-transform transform hover:scale-105  font-bold hover:bg-white"  onClick={startCountdown}> Start </button>
        <button className=" shadow-lg sm:w-[70px] lg:w-[90px] mb1:mr-[10px]   p-[10px] rounded-[6px] sm:mr-[20px] lg:mr-[40px] bg-red-500 text-white hover:text-red-500 transition-transform transform hover:scale-105 font-bold hover:bg-white"  onClick={pauseCountdown}>Pause </button>
        <button className="shadow-lg sm:w-[70px] lg:w-[90px] mb1:mr-[10px]   p-[10px] rounded-[6px] sm:mr-[20px] lg:mr-[40px] bg-orange-500 text-white hover:text-orange-500  transition-transform transform hover:scale-105  font-bold hover:bg-white"   onClick={resetCountdown}> Reset </button>
        </div>    
    </div>
    </div>
    </>
  );
};
export default Count