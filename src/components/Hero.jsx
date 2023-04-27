import React from 'react'

const Hero = () => {
  return (
    <div className='w-full h-[90vh]'>
        <img 
            src="https://images.pexels.com/photos/2271653/pexels-photo-2271653.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" 
            alt="/"
            className='w-full h-full object-cover' 
        />  
        <div className='max-w-[1140px] m-auto'>
            <div className='absolute top-[40%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-white p-4'>
                <h1 className='font-bold text-4xl'>Find Your Special Trip</h1>
                <h2 className='text-4xl py-4 italic'>With Weekaway</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores vel fugiat minus, ducimus nesciunt eaque placeat aliquid sed exercitationem molestias dolorum, blanditiis dolor optio laborum labore nihil itaque a doloremque.</p>
            </div>
        </div>     
    </div>
  )
}

export default Hero