import React from 'react'
import {Link} from "react-router-dom"

const Home = () => {
  return (
    <div className='flex justify-center items-center h-screen mb1:text-[20px] sm:text-[40px] font-bold '>
        <Link to="/stopwatch" className='mr-[30px] bg-red-500 text-white p-[10px] rounded-[6px] transition-transform transform hover:scale-105'>StopWatch</Link>
        <Link to="countdown" className='bg-violet-500 text-white p-[10px] rounded-[6px] transition-transform transform hover:scale-105'>Count Down</Link>

    </div>
  )
}

export default Home