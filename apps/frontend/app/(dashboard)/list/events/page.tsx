import FormModal from '@/app/components/FormModel';
import { role } from '@/app/lib/data';
import { Class } from '@prisma/client';
import Link from 'next/link';
import React from 'react';
import Image from "next/image";


type eventList = Event & {class: Class};
 
 const columns = [
    {
      header: "Title",
      accessor: "title",
    },
    {
      header: "Class",
      accessor: "class",
    },
    {
      header: "Date",
      accessor: "date",
      className: "hidden md:table-cell",
    },
    {
      header: "Start Time",
      accessor: "startTime",
      className: "hidden md:table-cell",
    },
    {
      header: "End Time",
      accessor: "endTime",
      className: "hidden md:table-cell",
    },

          {
            header: "Actions",
            accessor: "action",
          },
   
  ];

  const renderRow = (item: eventList) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight"
    >  
      <td className="flex items-center gap-4 p-4">{item.lesson.subject.name}</td>
      <td >{item.lesson.class.name}</td>
      <td className="hidden md:table-cell">
        {item.lesson.teacher.name + " " + item.lesson.teacher.surname}
        </td> 
      <td className="hidden md:table-cell">
        {new Intl.DateTimeFormat("en-US").format(item.startTime)}
        </td>
      <td>
        <div className="flex itmes-center gap-2">
            <Link href={`/list/teacher/${item.id}`}>
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-100blue">
                <Image src="/view.png" alt="" width={16} height={16}/>
            </button>
            </Link>
            {role === "admin" && (
              <>
               <FormModal table="exam" type="update" data={item}/>
                <FormModal table="exam" type="delete" id={item.id}/>
              </>
            )}
        </div>
      </td>
    </tr>
  );


 const EventPage = () => {

  return (
    <div className='bg-white p-48 rounded-md flex-1 m-4 mt-0'>
      <div className='flex items-center justify-between'>
        <h1 className='hidden md:block text-lg font-semibold'>All Events</h1>
        <div className='flex flex-col md:flex-row items-center gap-4'>

        </div>
      </div>  
    </div>
  )
}


export default EventPage