import Image from 'next/image'
import React from 'react'
import green_chilli from '../public/Green Chilli.png'
import mango_pickle from '../public/mango_pickle.png'
import '@fontsource/oswald'; 

const Definately = () => {
  return (
    <div className='my-4 mx-20'>
      <div className='text-6xl font-inter text-center'>You Definately <span className='text-custom-red'>Love This</span></div>
   

   <div className='flex my-8 gap-12 w-full'>
    <div className='rounded border border '> 
        <Image src={green_chilli} height={400} width={400} alt='green_chill'/>
    </div>
    <div className=' rounded-xl bg-custom-red relative'>
    <p className='ml-24 mt-6 text-7xl font-oswald text-white'>PICKLE</p>
    <Image  className=''src={mango_pickle} height={400} width={400} alt='green_chill'/>
    </div>
    <div className='rounded-xl bg-custom-red relative'>
    <p className='ml-24 mt-6 text-7xl font-oswald text-white'>PICKLE</p>
    <Image src={mango_pickle} height={400} width={400} alt='green_chill'/>
    </div>
   </div>

    </div>
  )
}

export default Definately
