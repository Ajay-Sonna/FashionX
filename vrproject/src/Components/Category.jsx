import React from 'react';
import { categories } from '../constants';

function Category() {
  return (
    <div className=' mt-1 border-b border-neutral-800 min-h-[500px]'> 
      <div className='text-center'>
        <span className='bg-blue-200 text-blue-500 rounded-full h-6 text-sm font-medium px-2 py-2 uppercase'>
          Categories
        </span>
        <h2 className='text-2xl sm:text-4xl p-2 lg:text-7xl  lg:mt-10 tracking-wide'>
          Find Your <span className='bg-gradient-to-r from-orange-400 to-blue-800 bg-clip-text text-transparent'>Fashion</span>
        </h2>
      </div>
      <div className='flex flex-wrap mt-10 lg:mt-20'>
        {categories.map((item,index)=>
        <div key={index} className='w-full sm:1/2 lg:w-1/3'>
          <div className='flex justify-center'>
            <div className='flex mx-6 h-10 w-10 p-2 justify-center items-center rounded-full text-orange-500'>
              {item.icon}  
            </div>
            <div>
              <h4 className='mt-2  mb-2 text-blue-200'>{item.text}</h4>
              <div>
                  <img src={item.img} className='w-full h-30 object-cover'></img>
              </div>
            </div>
          </div>
        </div>
        )}
      </div>
    </div>
  )
}

export default Category