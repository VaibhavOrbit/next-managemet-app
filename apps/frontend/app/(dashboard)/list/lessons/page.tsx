import FormModal from "@/app/components/FormModel";
import Pagination from "@/app/components/Paginatioin";
import Table from "@/app/components/Table";
import { TableSearch } from "@/app/components/TableSearch";
import { classesData, lessonsData, parentsData, role } from "@/app/lib/data";

import Image from "next/image";
import Link from "next/link";

type lesson = {
id: number;
subject: string;
class: string;
teacher: string;

};

const columns = [

  {
    header: "Subject name",
    accessor: "name",
 
  },
  {
    header: "Class ",
    accessor: "capacity",


  },
  {
    header: "Teacher",
    accessor: "Teacher",
    className: "hidden md:table-cell",
  },

  {
    header: "Actions",
    accessor: "action",
  },
];

const ClassesListPage = () => {
  const renderRow = (item: lesson) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight"
    >
      <td className="flex items-center gap-4 p-4">{item.subject}</td>
      <td >{item.class}</td>
      <td className="hidden md:table-cell">{item.teacher}</td>
      <td>
        <div className="flex itmes-center gap-2">
        
            {role === "admin" && (
              <>
                  <FormModal table="lesson" type="update" data={item}/>
                  <FormModal table="lesson" type="delete" id={item.id}/>
              </>
              )}
          </div>
       </td>
    </tr>
  );

  return (
    <div className="bg-white p-4 rounde-md flex-1 m-4 mt-0">
      {/* TOP */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">All lessons</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-amber-300">
              <Image src="/filter.png" alt="" width={14} height={14} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-amber-300">
              <Image src="/sort.png" alt="" width={14} height={14} />
            </button>
            {role === "admin" && <FormModal table="teacher" type="create"/>}
          </div>
        </div>
      </div>
      {/* LIST */}
      <Table columns={columns} renderRow={renderRow} data={lessonsData} />
      {/* PAGINATION */}
      <Pagination />
    </div>
  );
};

export default ClassesListPage;