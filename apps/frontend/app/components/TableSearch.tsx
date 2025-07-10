import React from 'react'
import Image from 'next/image'

export const TableSearch = () => {
  return (
      <div className="w-full md:w-auto flex  gap-3 ring-[1.5px] ring-gray-300 p-2 items-center text-sm rounded-full">
               <Image src="/search.png" alt="" width={14} height={14}/>
               <input type="text" placeholder="Search..." className=" bg-transparent w-[200px] outline-none"/>
           </div>
  )
}
