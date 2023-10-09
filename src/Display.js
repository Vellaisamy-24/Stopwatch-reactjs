import React from 'react';

function Display({timer}) {
  const h = () => {
     if(timer.hour === 0){
       return <span className='text-red-200  mb1:text-[60px]  sm:text-[120px] lg:text-[200px]  mb1:pr-[20px] sm:pr-[30px]'>00</span>
     }else {
       return <span>{(timer.hour >= 10)? timer.hour : "0"+ timer.h}</span>;
     }
  }
  return (
    <>
    <div className=' font-bold text-[40px] font-ibm-plex-sans  text-violet-400 shadow-lg not-italic  text-center  mt-[150px]'>Stop watch </div>
    <div className='w-screen mb1:text-[60px]  sm:text-[120px] lg:text-[200px]  text-center mt-[50px]'>
  
       {h()}
       <span className='text-red-200 mb1:pr-[20px] sm:pr-[30px]'>{(timer.minutes >= 10)? timer.minutes : "0"+ timer.minutes}</span>
       <span className='text-red-200 mb1:pr-[20px] sm:pr-[30px]'>{(timer.seconds>= 10)? timer.seconds : "0"+ timer.seconds}</span>
       <span className='text-red-200 mb1:pr-[20px] sm:pr-[30px]'>{(timer.milliseconds >= 10)? timer.milliseconds: "0"+ timer.milliseconds}</span>
    </div>
    </>
  );
}

export default Display;