import FormModal from "@/app/components/FormModel"
import Pagination from "@/app/components/Paginatioin"
import Table from "@/app/components/Table"
import { TableSearch } from "@/app/components/TableSearch"
import { role, teachersData } from "@/app/lib/data"
import { Class, Prisma, Student } from "@prisma/client"
import { prisma } from "@repo/db/client"
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


type StudentList = Student & {class: Class};

const renderRow = (item: StudentList) => (
    <tr key={item.id} className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-blue-100">
      <td className="flex items-center  gap-4 p-4">
        <Image
            src={item.img || "/noAvatar.png"}
            alt=""
            width={40} 
            height={40} 
            className="md:hidden xl:block w-10 h-10 rounded-full object-cover"
            />
            <div className="flex flex-col"> 
              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-xs text-gray-500">{item?.class.name}</p>
            </div>
      </td>
      <td className="hidden   md:table-cell" > {item.username}</td >
      <td className="hidden  md:table-cell" >{item.class.name[0]}</td >

      <td className="hidden  md:table-cell" >{item.phone}</td >
      <td className="hidden  md:table-cell" >{item.address}</td>
      <td>
        <div className="flex items-center gap-2">
          <Link href={`/list/students/${item.id}`}>
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

 const StudentListPage = async({
       searchParams,
    }: {
      searchParams:{ [key:string]:string | undefined};
    }) => {
    const { page, ...queryParams } = searchParams;

  const p = page ? parseInt(page) : 1;

  // URL PARAMS CONDITION

  const query: Prisma.StudentWhereInput = {};

  if (queryParams) {
    for (const [key, value] of Object.entries(queryParams)) {
      if (value !== undefined) {
        switch (key) {
          case "teacherId":
            query.class = {
              lessons: {
                some: {
                  teacherId: value,
                },
              },
            };
            break;
          case "search":
            query.name = { contains: value, mode: "insensitive" };
            break;
          default:
            break;
        }
      }
    }
  }

  const [data, count] = await prisma.$transaction([
    prisma.student.findMany({
      where: query,
      include: {
        class: true,
      },
      take: 10,
      skip: 10 * (p - 1),
    }),
    prisma.student.count({ where: query }),
  ]);



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
        <Table columns={columns} renderRow={renderRow} data={data}/>
      </div>
         {/* PAGINATION */}
       <div className="">
        <Pagination page={p} count={count} />
       </div>
    </div>
  )
}
 
export default  StudentListPage 
