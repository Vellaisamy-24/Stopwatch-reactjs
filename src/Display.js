import React from 'react';

function Display({timer}) {
  const h = () => {
     if(timer.hour === 0){
       return <span className='text-red-200 pr-[20px]'>00</span>
     }else {
       return <span>{(timer.hour >= 10)? timer.hour : "0"+ timer.h}</span>;
     }
  }
  return (
    <div className='w-screen mb1:text-[90px]  sm:text-[120px] lg:text-[200px]  text-center mt-[200px]'>
       {h()}
       <span className='text-red-200 sm:pr-[20px]'>{(timer.minutes >= 10)? timer.minutes : "0"+ timer.minutes}</span>
       <span className='text-red-200 sm:pr-[20px]'>{(timer.seconds>= 10)? timer.seconds : "0"+ timer.seconds}</span>
       <span className='text-red-200 sm:pr-[20px]'>{(timer.milliseconds >= 10)? timer.milliseconds: "0"+ timer.milliseconds}</span>
    </div>
  );
}

export default Display;