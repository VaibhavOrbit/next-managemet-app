import FormModal from "@/app/components/FormModel";
import Pagination from "@/app/components/Paginatioin";
import Table from "@/app/components/Table";
import { TableSearch } from "@/app/components/TableSearch";
import { classesData, parentsData, role } from "@/app/lib/data";
import { Class, Prisma, Teacher } from "@prisma/client";
import { prisma } from "@repo/db/client";
import { Quicksand } from "next/font/google";
import Image from "next/image";


type ClassList = Class & { supervisor: Teacher };

const columns = [

  {
    header: "Class Name",
    accessor: "name",
 
  },
  {
    header: "capacity",
    accessor: "capacity",
    className: "hidden md:table-cell",

  },
  {
    header: "grade",
    accessor: "grade",
    className: "hidden md:table-cell",
  },
    {
    header: "supervisor",
    accessor: "supervisor",
    className: "hidden md:table-cell",
  },
  {
    header: "Actions",
    accessor: "action",
  },
];

  const renderRow = (item: ClassList) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight"
    >
      <td className="flex items-center gap-4 p-4">{item.name}</td>
      <td className="hidden md:table-cell">{item.capacity}</td>
      <td className="hidden md:table-cell">{item.name[0]}</td>
        <td className="hidden md:table-cell">
      {item.supervisor.name + " " + item.supervisor.surname}
    </td>
      <td>
        <div className="flex itmes-center gap-2">

            {role === "admin" && (
              <>
              <FormModal table="class" type="update" id={item.id}/>
              <FormModal table="class" type="delete" id={item.id}/> 
              </>
            )}

        </div>
    
      </td>
    </tr>
  );




const ClassesListPage =async ({searchParams
}: {
     searchParams:{ [key:string]:string | undefined};
}) => {   

      const {page, ...queryParams} = searchParams;

      const p = page? parseInt(page): 1; 

          const query: Prisma.ClassWhereInput  = {}; 

          if(queryParams) {
            for(const [key, value] of Object.entries(queryParams)){
                if(value !== undefined) {
                  switch (key) {
                    case "supervisorId":
                      query.supervisorId = value;
                      break;
                      case "search":
                        query.name = {contains: value, mode: "insensitive"};
                        break;
                        default:
                        break;
                  }
                }
            }
          }
      

    const [data, count] = await prisma.$transaction([
      prisma.class.findMany({
        where: query,
        include: {
          supervisor: true,
        },
        take: 10,
        skip: 10 * (p-1),
      }),
      prisma.class.count({where: query}),
    ])


  return (
    <div className="bg-white p-4 rounde-md flex-1 m-4 mt-0">
      {/* TOP */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">All Parents</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-amber-300">
              <Image src="/filter.png" alt="" width={14} height={14} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-amber-300">
              <Image src="/sort.png" alt="" width={14} height={14} />
            </button>
            {role === "admin" &&  <FormModal table="teacher" type="delete" />}
          </div>
        </div>
      </div>
      {/* LIST */}
      <Table columns={columns} renderRow={renderRow} data={data}/>
      {/* PAGINATION */}
      <Pagination page={p} count={count} />
    </div>
  );
};

export default ClassesListPage;