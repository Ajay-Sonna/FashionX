import React from 'react';
import { CheckCircle } from 'lucide-react';
import { pricingOptions } from '../constants';

function Offers() {
  return (
    <div className='mt-10'>
      <h2 className='text-3xl sm:text-5xl text-center m-3'><span className='bg-blue-200 text-blue-500 rounded-md px-2'>Pricing</span></h2>
      <div className='flex flex-wrap'>
        {pricingOptions.map((item, index)=> 
        <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
          <div className='p-10 border border-neutral-700 rounded-xl'>
            <p className='text-4xl mb-8'>
              <span className='bg-gradient-to-r from-blue-400 to-orange-800 text-transparent bg-clip-text'>{item.title}</span> 
              {item.title === "Pro" && 
              <span className='bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text text-xl'>(Most Popular)</span>}
            </p>
            <p className='mb-8'>
              <span className='text-2xl'>Shop for - {item.price} </span>
              <span className='text-slate-500'>{item.description}</span>
            </p>
            <ul>
              {item.features.map((item,index)=>
              <li key={index} className='mt-8 flex items-center'>
                <CheckCircle className='text-orange-500'/>
                <span className='ml-2'>{item}</span>
              </li>
              )}
            </ul>
            <a href='#'
            className='inline-flex jusify-center w-full p-5 justify-center text-center border border-blue-500 rounded-md mt-5 hover:bg-gradient-to-r from-blue-500 to-orange-800 hover:text-black'>
              Shop Now
            </a>
          </div>
        </div>
        )}
      </div>
    </div>
  )
}

export default Offers;