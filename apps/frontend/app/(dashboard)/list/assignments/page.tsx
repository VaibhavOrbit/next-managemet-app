import FormModal from "@/app/components/FormModel";
import Pagination from "@/app/components/Paginatioin";
import Table from "@/app/components/Table";
import { TableSearch } from "@/app/components/TableSearch";
import { assignmentsData, classesData, examsData, lessonsData, parentsData, role } from "@/app/lib/data";
import { Assignment, Class, Prisma, Subject, Teacher } from "@prisma/client";
import { prisma } from "@repo/db/client";
import Image from "next/image";
import Link from "next/link";

type AssignmentList = Assignment & {
  lesson: {
    subject: Subject;
    class: Class;
    teacher: Teacher;
  };
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
    header: "DueDate",
    accessor: "Date",
    className: "hidden md:table-cell",
  },

  {
    header: "Actions",
    accessor: "action",
  },
];

const renderRow = (item: AssignmentList) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-blue-100"
    >  
      <td className="flex items-center gap-4 p-4">{item.lesson.subject.name}</td>
      <td >{item.lesson.class.name}</td>
      <td className="hidden md:table-cell">{item.lesson.teacher.name}</td>
      <td className="hidden md:table-cell">
                {new Intl.DateTimeFormat("en-US").format(item.dueDate)}
      </td>
      <td>
        <div className="flex itmes-center gap-2">
            <Link href={`/list/teacher/${item.id}`}>
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-100blue">
                <Image src="/view.png" alt="" width={16} height={16}/>
            </button>
            </Link>
            {role === "admin" && (
                <button className="w-7 h-7 flex items-center justify-center rounded-full bg-purple-300">
                    <Image src="/delete.png" alt="" width={16} height={16} />
                </button>
            )}

        </div>
    
      </td>
    </tr>
);

const AssignmentPage =async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) => {
  
  const { page, ...queryParams } = searchParams;

   const p = page ? parseInt(page) : 1;


   const query : Prisma.AssignmentWhereInput = {};

   query.lesson = {};

 if (queryParams) {
    for (const [key, value] of Object.entries(queryParams)) {
      if (value !== undefined) {
        switch (key) {
          case "classId":
            query.lesson.classId = parseInt(value);
            break;
          case "teacherId":
            query.lesson.teacherId = value;
            break;
          case "search":
            query.lesson.subject = {
              name: { contains: value, mode: "insensitive" },
            };
            break;
          default:
            break;
        }
      }
    }
  }
    const [data, count] = await prisma.$transaction([
    prisma.assignment.findMany({
      where: query,
      include: {
        lesson: {
          select: {
            subject: { select: { name: true } },
            teacher: { select: { name: true, surname: true } },
            class:   { select: { name: true } },
          },
        },
      },
      take: 10,
      skip: 10 * (p - 1),
    }),
    prisma.assignment.count({ where: query }),
  ]);

  return (
    <div className="bg-white p-4 rounde-md flex-1 m-4 mt-0">
      {/* TOP */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">All Assignments</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-amber-300">
              <Image src="/filter.png" alt="" width={14} height={14} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-amber-300">
              <Image src="/sort.png" alt="" width={14} height={14} />
            </button>
            {role === "admin" && (
              <FormModal table="teacher" type="create"/>
            )}
          </div>
        </div>
      </div>
      {/* LIST */}
       <Table columns={columns} renderRow={renderRow} data={data} />
      {/* PAGINATION */}
      <Pagination page={p} count={count} />
    </div>
  );
};

export default AssignmentPage;