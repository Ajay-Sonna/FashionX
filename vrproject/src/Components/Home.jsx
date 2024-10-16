import React from 'react';
import video3 from "../assets/video3.mp4"

import video4 from "../assets/video4.mp4"

function Home() {
  return (
    <div className='flex flex-col items-center mt-5 lg:mt-1'>
        <h1 className='text-4xl lg:text-7xl sm:text-6xl tracking-wide text-center'>Discover Fashion Trends
            <span className='bg-gradient-to-r from-blue-400 to-orange-800 text-transparent bg-clip-text'>{" "}Shop Your Style</span></h1>
        <p className='w-50 text-center m-3 text-stone-500 p-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, illo.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, reprehenderit?
        </p>
        <div className='flex justify-center item-center'> 
            <a className='bg-gradient-to-r from-blue-400 to-blue-800 border border-orange-500 rounded-md p-2 m-2 text-white'>Shop Now</a>
            <a className='bg-gradient-to-r from-blue-400 to-blue-800 border border-orange-500 rounded-md p-2 m-2 text-white'>Check Inn</a>
        </div>
        <div className='flex flex-wrap justify-center mt-5 p-10'>
            <video autoPlay loop muted className='border border-blue-500 rounded-md md:w-2/5 object-cover  m-2'>
                <source src={video3}/>
            </video>
            <video autoPlay loop muted className='border border-blue-500 rounded-md md:w-2/5  m-2'>
                <source src={video4}/>
            </video>
        </div>
    </div>
  )
}

export default Home