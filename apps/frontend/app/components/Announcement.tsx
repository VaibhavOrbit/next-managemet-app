import React from 'react'
import Image from 'next/image'

 const Announcement = () => {
  return (
    <div className='bg-white p-4 rounded-md '>
    <div className='flex justify-between items-center'>
        <h1 className=' font-semibold'>Announcement</h1>
        <span className='text-xs text-gray-600 '>View all</span>
    </div>

       <div className='flex flex-col gap-4 mt-4'>
        <div className='bg-blue-300 rounded-md p-4'>
            <div className='flex items-center justify-between'>
                <h2>Lorem ipume doler dit </h2>
                <span className='text-xs text-gray-400 bg-white rounded-md px-1 py-1'>
                    2025-01-01
                </span>
            </div>
             <p className='text-gray-500 font-semibold'>fiawtep9hfkasjvdgiawhzvyrhvkasfgfhgsafsd fiawtep9hfkasjvdgiawhzvyrhvkasfgfhgsafsd </p>
        </div>
           <div className='bg-pink-300 rounded-md p-4'>
            <div className='flex items-center justify-between'>
                <h2>Lorem ipume doler dit </h2>
                <span className='text-xs text-gray-400 bg-white rounded-md px-1 py-1'>
                    2025-01-01
                </span>
            </div>
             <p>fiawtep9hfkasjvdgiawhzvyrhvkasfgfhgsafsd </p>
        </div>
           <div className='bg-red-300 rounded-md p-4'>
            <div className='flex items-center justify-between'>
                <h2>Lorem ipume doler dit </h2>
                <span className='text-xs text-gray-400 bg-white rounded-md px-1 py-1'>
                    2025-01-01
                </span>
            </div>
             <p>fiawtep9hfkasjvdgiawhzvyrhvkasfgfhgsafsd </p>
                  

        </div>
      
        
       </div>

    </div>
    
  )
}


export default Announcement