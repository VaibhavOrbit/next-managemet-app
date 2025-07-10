import FormModal from "@/app/components/FormModel"
import Pagination from "@/app/components/Paginatioin"
import Table from "@/app/components/Table"
import { TableSearch } from "@/app/components/TableSearch"
import { role, teachersData } from "@/app/lib/data"
import Image from "next/image"
import Link from "next/link"

const columns = [
  {
    header: "Info", 
    accessor: "info"
  }, 
  {
     header    : "Student ID",
     accessor : "teacherId", 
     className :"hidden md:table-cell"
  },
    {
     header    : "Grade",
     accessor : "subjects", 
     className :"hidden md:table-cell"
  },
   {
     header    : "Classes",
     accessor : "classes", 
     className :"hidden md:table-cell"
  },
    {
     header    : "Phone",
     accessor : "classes", 
     className :"hidden lg:table-cell"
  },
    {
     header    : "Address",
     accessor : "address", 
     className :"hidden lg:table-cell"
  },
    {
     header    : "Actions",
     accessor : "action", 
  }
];

type Student = {
    id:number,
    teacherId:string,
    name: string;
    email?: string;
    phone:string;
    subjects: string[];
    classes:string[];
    address:string;
    photo : string;
}

 const StudentListPage = () => {

  const renderRow = (item: Student) => (
    <tr key={item.id} className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-blue-100">
      <td className="flex items-center  gap-4 p-4">
        <Image
            src={item.photo}
            alt=""
            width={40} 
            height={40} 
            className="md:hidden xl:block w-10 h-10 rounded-full object-cover"
            />
            <div className="flex flex-col"> 
              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-xs text-gray-500">{item?.email}</p>
            </div>
      </td>
      <td className="hidden   md:table-cell" > {item.teacherId}</td >
      <td className="hidden  md:table-cell" >{item.teacherId}</td >
      <td className="hidden  md:table-cell" >{item.classes.join(",")}</td >
      <td className="hidden  md:table-cell" >{item.phone}</td >
      <td className="hidden  md:table-cell" >{item.address}</td>
      <td>
        <div className="flex items-center gap-2">
          <Link href={`/list/teachers/${item.id}`}>
          <button className="w-7 h-7 flex items-center justify-center rounded-full">
              <Image src="/view.png" alt="" width={16} height={16}/>
          </button>
          </Link>
          {role === "admin" && (
            <FormModal table="student" type="delete" id={item.id}/>
            
          )} 
        </div>
      </td>
    </tr>
  );

return (
    <div className="bg-white rounded-md flex-1 mt-0 m-4 p-4">
      {/* TOP */}
      <div className="flex justify-between items-center ">
        <h1 className="text-lg font-semibold md:block hidden">All Students</h1>
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
              <FormModal table="student" type="create"/>
            )}
          </div>
        </div>
      </div>
       {/* LIST */}
      <div className="p-3">
        <Table columns={columns} renderRow={renderRow} data={teachersData}/>
      </div>
         {/* PAGINATION */}
       <div className="">
        <Pagination/>
       </div>
    </div>
  )
}

export default  StudentListPage 
