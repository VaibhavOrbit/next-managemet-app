import FormModal from "@/app/components/FormModel"
import Pagination from "@/app/components/Paginatioin"
import Table from "@/app/components/Table"
import { TableSearch } from "@/app/components/TableSearch"
import { announcementsData, eventsData, role, teachersData } from "@/app/lib/data"
import Image from "next/image"
import Link from "next/link"

const columns = [
  {
    header: "Title", 
    accessor: "info"
  }, 
  {
     header    : "title",
     accessor : "teacherId", 
     className :"hidden md:table-cell"
  },
    {
     header    : "class",
     accessor : "subjects", 
     className :"hidden md:table-cell"
  },
   {
     header    : "date",
     accessor : "classes", 
     className :"hidden md:table-cell"
  },
];

type announcement = {
    id:number,
    title:string,
    class: string;
    date?: string;
    startTime:string;
    endTime: string[];
  
}


const AnnouncementsListPage = () => {

  const renderRow = (item: announcement) => (
    <tr
     key={item.id}
     className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-blue-200"
     >
      <td className="flex items-center  gap-4 p-4">
     
            <div className="flex flex-col"> 
              <h3 className="font-semibold">{item.title}</h3>
            </div>
      </td>
      <td className="hidden   md:table-cell" > {item.title}</td >
      <td className="hidden  md:table-cell" >{item.class}</td >
      <td className="hidden  md:table-cell" >{item.date}</td >
      
      <td>
        <div className="flex items-center gap-2">
          <Link href={`/list/teachers/${item.id}`}>
          <button className="w-7 h-7 flex items-center justify-center rounded-full">
              <Image src="/view.png" alt="" width={16} height={16}/>
          </button>
          </Link>
          {role === "admin" && (
              <button className="w-7 h-7 flex items-center justify-center rounded-full">
              <Image src="/delete.png" alt="" width={16} height={16}/>  
          </button>
          )} 
        </div>
      </td>
    </tr>
  );



  return (
    <div className="bg-white rounded-md flex-1 mt-0 m-4 p-4">
      {/* TOP */}
      <div className="flex justify-between items-center ">
        <h1 className="text-lg font-semibold md:block hidden">All Event</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch/>
          < div className="flex items-center gap-4 self-end ">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-yellow-300">
                <Image src="/filter.png" alt="" width={14} height={14}/>
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-yellow-300">
                <Image src="/sort.png" alt="" width={14} height={14}/>
            </button>
            
            {role === "admin" && (
              <FormModal table="teacher" type="create"/>
            )}
   
          </div>
        </div>
      </div>
       {/* LIST */}
      <div className="p-3">
        <Table columns={columns} renderRow={renderRow} data={announcementsData}/>
      </div>
         {/* PAGINATION */}
      <div className="">
        <Pagination/>
      </div>
     
    </div>
  )
}

export default  AnnouncementsListPage 
