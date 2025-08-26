"use client"

import React, { PureComponent } from 'react';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';
import Image from 'next/image';

const data = [
    {
    name: 'Total',
    count: 100,
    fill: 'white',
  },

  {
    name: 'Boys',
    count: 53,

    fill: '#8884d8',
  },
  {
    name: 'Girls',
    count: 53,
    fill: 'pink',
  },

];

const style = {
  top: '50%',
  right: 0,
  transform: 'translate(0, -50%)',
  lineHeight: '24px',
};


export const CountChart = () => {
  return (
    <div className='bg-white rounded-xl w-full h-full p-4'>
        {/* Title */}
        <div className='flex justify-between items-center' >
            <h1 className='text-lg font-semibold'>Students</h1>
            <Image src="/moreDark.png" alt='' width={20} height={20} />
        </div>
        {/* Chart */}
        <div className="w-full h-[75%] relative">
            <ResponsiveContainer >
        <RadialBarChart cx="50%" cy="50%" innerRadius="40%" outerRadius="100%" barSize={32} data={data}>
          <RadialBar    
        
            background
            dataKey="count"
          />
          {/* <Legend iconSize={10} layout="vertical" verticalAlign="middle"  /> */}
        </RadialBarChart>
      </ResponsiveContainer>
      <Image src= "/maleFemale.png" alt='' width={50} height={50} className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'/>
        </div>


        {/* Bottom */}
        <div className='flex justify-center gap-10'>
            <div className='flex flex-col gap-1'>
                <div className='w-5 h-5 bg-blue-600 rounded-full'></div>
                <h1 className='font-bold'>1,234</h1>
                <h2 className='text-xm text-gray-300' >boys(55%)</h2>
            </div>
             <div className='flex flex-col gap-1'>
                <div className='w-5 h-5 bg-pink-500 rounded-full'></div>
                <h1 className='font-bold'>1,234</h1>
                <h2 className='text-xm text-gray-300'>boys(55%)</h2>
            </div>
        </div>
    </div>
  )
}
