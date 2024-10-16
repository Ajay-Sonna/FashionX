import React from 'react';
import { testimonials } from '../constants';
testimonials

function Reviews() {
  return (
    <div className='mt-20 tracking-wide'>
      <h2 className='text-3xl sm:text-5xl lg:text-6xl text-center  my-5 lg:my-10 bg-gradient-to-r from-orange-400 to-blue-800 text-transparent bg-clip-text'>
        Reviews By Our Customer's
      </h2>
      <span className='mt-0 flex justify-center  text-center'>Your Opinion Matter</span>
      <div className='flex flex-wrap justify-center'>
       {testimonials.map((item, index)=>
      <div key={index} className='w-full sm:w-1/2 lg:w-1/3 px-4 py-2'>
        <div className='bg-neutral rounded-md p-6 text-md border border-neitral-800 font-thin w-full min-h-80 sm:min-48'>
          <p>{item.text}</p>
          <div className='flex mt-8 items-start'>
            <img className='w-12 h-12  rounded-full border border-blue-500' src={item.image} alt={item.user}></img>
            <div className='ml-5'>
              <h6>{item.user}</h6>
              <span className='text-sm  font-normal italic neutral-600'>{item.company}</span>
              </div>
          </div>
        </div>
      </div>
      )}
      </div>
    </div>
  )
}

export default Reviews;