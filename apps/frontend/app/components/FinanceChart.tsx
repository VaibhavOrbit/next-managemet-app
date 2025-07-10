"use client"
import Image from "next/image";
import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Jan',
    income: 1000,
   expence: 39038,
  
  },
  {
    name: 'Feb',
    income: 6000,
    expence: 3300,

  },
  {
    name: 'Mar',
    income: 40000,
   expence: 3908,

  },
  {
    name: 'Apr',
    income: 2780,
    expence: 3908,

  },
  {
    name: 'May',
    income: 1890,
    expence: 4800,

  },
  {
    name: 'jun',
    income: 2390,
    expence: 3800,

  },
  {
    name: 'Jul',
    income: 40000,
    expence: 4300,

  },
   {
    name: 'Aug',
    income: 3490,
    expence: 4300,

  },
   {
    name: 'Sep',
    income: 40000,
    expence: 4300,

  },
   {
    name: 'Oct',
    income: 3490,
    expence: 40000,

  },
   {
    name: 'Nov',
    income: 3490,
    expence: 4300,

  },
     {
    name: 'Dev',
    income: 3490,
    expence: 4300,

  },
];

 const FinanceChart = () => {
  return (
       <div className='bg-white rounded-lg p-4 h-full  '>
            <div className='flex justify-between items-center ' >
                       <h1 className='text-lg font-semibold'>Finance</h1>
                       <Image src="/moreDark.png" alt='' width={20} height={20} />
            </div>
            <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" 
          axisLine={false} 
          tick={{fill: "#d1d5db"}}
          tickLine={false} />
          <YAxis 
             axisLine={false} 
          tick={{fill: "#d1d5db"}}
          tickLine={false} />
          <Tooltip />
            <Legend 
                    align='center'
                    verticalAlign='top'
                    wrapperStyle={{paddingTop: "20px", paddingBottom: "30px"}} 
                    />
          <Line 
          type="monotone" 
          dataKey="income" 
          stroke="#C3EBFA" 
          strokeWidth={5} />
          <Line type="monotone" dataKey="expence" stroke="#CFCEFF"   strokeWidth={5} />
        </LineChart>
      </ResponsiveContainer>
          </div>
  )
}

export default FinanceChart;