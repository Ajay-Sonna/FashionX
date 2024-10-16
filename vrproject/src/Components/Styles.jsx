import React from 'react';
import { CheckCircle } from 'lucide-react';
//import codeImg from '../assets/code.jpg';
import fashionImg from '../assets/AllFashions.jpg';
import { styles } from '../constants';

function Styles() {
  return (
    <div className='mt-10'>
      <h2 className='text-3xl sm:text-5xl racking-wide text-center mb-5'>Explore Your {" "}
        <span className='bg-gradient-to-r from-blue-500 to-orange-800 text-transparent bg-clip-text '>Styles..</span>
      </h2>
      <div className='flex flex-wrap justify-center'>
        <div className='p-2 w-full lg:w-1/2'>
            <img src={fashionImg} className='h-full object-cover border rounded-md'></img>
        </div>
        <div className='pt-12 w-full lg:w-1/2'>
            {styles.map((item, index)=>
            <div key={index} className='flex mb-12'>
              <div className='text-orange-400 mx-6'>
                <CheckCircle/>
              </div>
              <div>
                <h5 className="mt-1 mb-2 text-xl text-blue-200">{item.title}</h5>
                <p className='text-md text-neutral-500'>{item.description}</p>
              </div>
            </div>
            )}
        </div>
        <div>
        </div>
      </div>
    </div>
  )
}

export default Styles;