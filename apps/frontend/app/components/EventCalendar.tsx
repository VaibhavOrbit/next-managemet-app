"use client"
import React from 'react'
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Image from 'next/image';

const events = [
  {
    id: 1,
    title: "lorem sdfkjas",
    time : "12am - 1pm",
    description : "lorem ipsu aoq347y sdbvj,asdfiwegfjasvdfasgo8fyasibfvjasdf9asfwav"
  },
    {
    id: 2,
    title: "lorem sdfkjas",
    time : "12am - 1pm",
    description : "lorem ipsu aoq347y sdbvj,asdfiwegfjasvdfasgo8fyasibfvjasdf9asfwav"
  },
    {
    id: 3,
    title: "lorem sdfkjas",
    time : "12am - 1pm",
    description : "lorem ipsu aoq347y sdbvj,asdfiwegfjasvdfasgo8fyasibfvjasdf9asfwav"
  },
]


type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export const EventCalendar = () => {

  const [value, onChange] = useState<Value>(new Date());
  return (
    
    <div className='bg-white p-4 rounded-md '>
       {/* <Calendar onChange={onChange} value={value} /> */}
       <div className='flex justify-between items-center'>
        <h1 className='text-lg font-semibold my-4'>Events</h1>
        <Image src="/moreDark.png" alt='' width={20} height={20}/>
       </div>
       <div className='flex flex-col gap-4 '>
        {events.map(e=>(
          <div className=' p-5 rounded-md border-1 border-gray-100 border-t-4 odd:border-t-blue-400  even:border-t-amber-400' key={e.id}>
            <div className='flex justify-between items-center' >
              <h1 className='font-semibold text-gray-600'>{e.title}</h1>
              <span className='text-xs text-gray-300'>{e.time}</span>
            </div>
            <p className='mt-2 text-gray-400 text-sm'>{e.description}</p>
          </div>

        ))}
        {/* Formula: {array.map(item => (JSX))}
Translation: "For each item in array, create this JSX" */}
       </div>
    </div>
  )
}

export default  EventCalendar