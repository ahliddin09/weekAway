import React from 'react'

const Gallery = () => {
  return (
    <div id='gallery' className='max-w-[1140px m-auto w-full px-4 py-16] h-full'>
        <h2 className='text-center text-gray-700 p-4'>Gallery</h2>
        <div className='grid sm:grid-cols-5 gap-4'>
            <div className='sm:col-span-3 col-span-2 row-span-2'>
                <img className='w-full h-full object-cover' src="https://images.pexels.com/photos/6775268/pexels-photo-6775268.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </div>
            <div>
                <img className='w-full h-full object-cover' src="https://images.pexels.com/photos/594077/pexels-photo-594077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </div>
            <div>
                <img className='w-full h-full object-cover' src="https://images.pexels.com/photos/2265878/pexels-photo-2265878.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            </div>
            <div>
                <img className='w-full h-full object-cover' src="https://images.pexels.com/photos/1449729/pexels-photo-1449729.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            </div>
            <div>
                <img className='w-full h-full object-cover' src="https://images.pexels.com/photos/3771835/pexels-photo-3771835.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Gallery