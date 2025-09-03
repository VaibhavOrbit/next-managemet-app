import FormModal from "@/app/components/FormModel"
import Pagination from "@/app/components/Paginatioin"
import Table from "@/app/components/Table"
import { TableSearch } from "@/app/components/TableSearch"
import { announcementsData, eventsData, role, teachersData } from "@/app/lib/data"
import { Announcement, Class, Prisma } from "@prisma/client"
import { prisma } from "@repo/db/client"
import Image from "next/image"

type announcementList = Announcement & {class: Class}

const columns = [
  {
    header: "Title", 
    accessor: "info"
  }, 
  {
     header    : "Class",
     accessor : "class", 
     className :"hidden md:table-cell"
  },
    {
     header    : "Date",
     accessor : "date", 
     className :"hidden md:table-cell"
  },
   {
     header    : "Action",
     accessor : "classes", 
     className :"hidden md:table-cell"
  },
];

const renderRow = (item: announcementList) => (
    <tr
     key={item.id}
     className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-blue-200"
     >
      <td className="flex items-center  gap-4 p-4">
        <div className="flex flex-col"> 
            <h3 className="font-semibold">{item.title}</h3>
         </div>
      </td>
      <td className="hidden   md:table-cell" > {item.class.name}</td >
      <td className="hidden  md:table-cell">
       {new Intl.DateTimeFormat("en-US").format(item.date)}
        </td>

      <td>
        <div className="flex items-center gap-2">
          {role === "admin" && (
            <>
            <FormModal table="announcement" type="update" data={item}/>
            <FormModal table= "announcement" type = "delete" id={item.id}/>
            </>
          )} 
        </div>
      </td>
    </tr>
);


const AnnouncementsListPage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) => {

   const { page, ...queryParams } = searchParams;
  
   const p = page ? parseInt(page): 1;

    const query: Prisma.AnnouncementWhereInput = {};

    if(queryParams){
      for(const [key, value] of Object.entries(queryParams)){
        if(value !== undefined){
          switch (key){
            case "search":
              query.title = {contains: value, mode: "insensitive"};
              break;
              default:
              break;
          }
        }
      }
    }

    const [data, count] = await prisma.$transaction([
      prisma.announcement.findMany({
        where: query,
        include: {
          class: true,
        },
        take: 10,
        skip: 10 * (p-1)
      }),
      prisma.announcement.count({where: query})
    ])


  return (
    <div className="bg-white rounded-md flex-1 mt-0 m-4 p-4">
      {/* TOP */}
      <div className="flex justify-between items-center ">
        <h1 className="text-lg font-semibold md:block hidden">All announcements</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto ">
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
        <Table columns={columns} renderRow={renderRow} data={data}/>
      </div>
         {/* PAGINATION */}
      <div className="">
        <Pagination page={p} count={count}/>
      </div>
     
    </div>
  )
}

export default  AnnouncementsListPage 
