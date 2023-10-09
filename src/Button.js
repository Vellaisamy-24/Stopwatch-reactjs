import React from 'react';

function Button({start,stop,resume,reset,status}) {
  return (
    <div className='text-center m-[10px] '>
      {status === 0 ? (
        <button className=' mb1:text-[20px] bg-green-500 p-[10px] shadow-lg  transform-transition transform hover:scale-105 border rounded font-bold rounded-[10px] text-white sm:text-[30px] lg:text-[40px]  ' onClick={start}>Start</button>
      ) : (
        ""
      )}

      {status === 1 ? (
        <div  >
          <button  className='  mr-[10px]  hover:text-red-500 hover:bg-white bg-red-500 text-white p-[10px] rounded-[10px] shadow-lg  transform-transition  font-bold transform hover:scale-105 mb1:text-[20px] sm:text-[30px] lg:text-[40px] ' onClick={stop}>Stop</button>
          <button  className='  mr-[10px] hover:text-green-500 hover:bg-white bg-green-500 rounded-[10px] p-[10px] text-white mb1:text-[20px]  sm:text-[30px] font-bold  lg:text-[40px] shadow-lg   sm-[40px]'  onClick={reset}>Reset</button>
        </div>
      ) : (
        ""
      )}

      {status === 2 ? (
        <div>
          <button   className='mr-[10px] hover:text-green-500 hover:bg-white bg-green-500 p-[10px] rounded-[10px] text-white transform-transition  font-bold  transform hover:scale-105 shadow-lg   mb1:text-[20px] sm:text-[30px] lg:text-[40px]    sm:m-[40px]' onClick={resume}>Resume</button>
          <button  className=' mr-[10px] hover:text-red-500 hover:bg-white bg-red-500 text-white transform-transition transform hover:scale-105  font-bold shadow-lg  mb1:text-[20px] sm:text-[30px] lg:text-[40px] p-[10px] rounded-[10px]  sm-[40px]' onClick={reset}>Reset</button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Button;
