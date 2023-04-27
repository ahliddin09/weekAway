import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className='max-w-[1140px] m-auto w-full p-4 py-16'>
        <h2 className='text-center text-gray-700'>Send us massage</h2>
        <p className='text-center text-grat-700 py-2'>We're standing by!</p>
        <div className='grid md:grid-cols-2'>
          <img src="https://images.pexels.com/photos/3155639/pexels-photo-3155639.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className='w-full md:h-full object-cover p-2 max-h-[500px] h-[200px]'/>
          <form>
            <div className='grid grid-cols-2'>
              <input className='border m-2 p-2
              ' type="text" placeholder='First' />
              <input className='border m-2 p-2
              ' type="text" placeholder='Last' />
              <input className='border m-2 p-2
              ' type="text" placeholder='Email' />
              <input className='border m-2 p-2' 
                type="text" placeholder='Phone' />
              <input className='border cols-span-2 m-2 p-2' type="text" placeholder='Address' />
              <textarea cols='30'rows='10'></textarea>
              <button className='cols-span-2 m-2
              '>Sumbit</button>
            </div>
          </form>
        </div>
    </div>
  )
}

export default Contact