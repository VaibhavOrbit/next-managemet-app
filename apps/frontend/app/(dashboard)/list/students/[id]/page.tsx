import Image from "next/image";
import { Poppins } from "next/font/google";
import BigCalender from "@/app/components/BigCalender";
import Link from "next/link";
import Announcement from "@/app/components/Announcement";
import PerfomanceChart from "@/app/components/PerfomanceChart";



 const StudentSinglePage = () => {
  return (
    <div className="flex-1 flex flex-col xl:flex-row gap-4 p-4">
        {/* LEFT */}
        <div className="w-full xl:w-2/3 ">
        {/* TOP */}
        <div className="flex flex-col lg:flex-row gap-4">
            {/* UserCard */}
            <div className="bg-blue-900 py-6 px-4 rounded-md flex-1 flex gap-4">
              <div className="w-1/3 ">
              <Image 
               width={144}
                height={144}
               src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1200"
               alt=""
               className="w-36 h-36 object-cover rounded-full "
               />
              </div>
              <div className="w-2/3 flex flex-col justify-between gap-4 text-white">
              <h1 className="text-3xl font-bold text-white ">Aman rai</h1>
              <p className="text-white font-bold text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
              <div className="flex items-center justify-between gap-2 flex-wrap text-xs mt-3 font-medium">
                <div className="w-full md:w-1/3 lg:w-full flex items-center gap-2">
                <Image src="/blood.png" className="bg-amber-50 rounded-full p-1" alt="" width={20} height={20}/>
                <span>A+</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full flex items-center gap-2">
                <Image src="/date.png" alt="" className="bg-amber-50 rounded-full p-1"  width={20} height={20}/>
                <span>January 2025</span>
                </div>
                     <div className="w-full md:w-1/3 lg:w-full flex items-center gap-2">
                <Image src="/mail.png" alt="" className="bg-amber-50 rounded-full p-1"  width={20}  height={20}/>
                <span>user@gmail.com</span>
                </div>
                     <div className="w-full md:w-1/3 lg:w-full flex items-center gap-2">
                <Image src="/phone.png" alt="" className="bg-amber-50 rounded-full p-1"  width={20}  height={20}/>
                <span>298475298475</span>
                </div>
              </div>
              </div>
            </div>
            {/* SMALL CARDS */}
            <div className="flex-1 flex gap-4 justify-between flex-wrap ">
              {/* CARD */}
              <div className="bg-white w-full p-4 rounded-md flex gap-4 md:w-[48%] xl:w-[45%]2xl:">
                <Image src="/singleAttendance.png" alt="" width={24} height={24} className="w-6 h-6"/>
                <div className="">
                  <h1 className="text-xl font-semibold">90%</h1>
                  <span className="text-sm text-gray-400">Attendance</span>
                </div>
              </div>
                   {/* CARD */}
              <div className="bg-white w-full p-4 rounded-md flex gap-4 md:w-[48%] xl:w-[45%]2xl:w-[48%]">
                <Image src="/singleBranch.png" alt="" width={24} height={24} className="w-6 h-6 "/>
                <div className="">
                  <h1 className="text-xl font-semibold">2</h1>
                  <span className="text-sm text-gray-400">Branches</span>
                </div>
              </div>
                   {/* CARD */}
              <div className="bg-white w-full p-4 rounded-md flex gap-4 md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
                <Image src="/singleLesson.png" alt="" width={24} height={24} className="w-6 h-6"/>
                <div className="">
                  <h1 className="text-xl font-semibold">6</h1>
                  <span className="text-sm text-gray-400">Lessons</span>
                </div>
              </div>
                   {/* CARD */}
              <div className="bg-white w-full p-4 rounded-md flex gap-4 md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
                <Image
                 src="/singleClass.png" 
                 alt="" 
                 width={24} 
                 height={24}
                 className="w-6 h-6"
                 />
                <div className="bg-white w-full p-4 rounded-md flex gap-4 md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
                  <h1 className="text-xl font-semibold">6</h1>
                  <span className="text-sm text-gray-400">Classes</span>
                </div>
              </div> 
            </div>
        </div>
           {/* BOTTOM */}
           <div className="mt-4 bg-white rounded-md p-4 h-[800px]">
            <h1 className="text-2xl font-semibold">Students&apos;s Schedule</h1>
            <BigCalender/>
           </div>
        </div>
        {/* Right */}
        <div className="w-full xl:w-1/3 flex flex-col gap-4">
          <div className="bg-white rounded-md p-4 ">
            <h1 className="text-xl font-semibold">Shortcuts</h1>
            <div className="mt-4 flex gap-4 flex-wrap text-xs text-gray-500">
               <Link className="p-3 rounded-md bg-blue-100" href="/">Student&apos;s Lessons</Link>
               <Link className="p-3 rounded-md bg-red-100" href="/">Stundent&apos;s Teachers</Link>
               <Link className="p-3 rounded-md bg-yellow-100" href="/">Student&apos;s Exams</Link>
                <Link className="p-3 rounded-md bg-green-100" href="/">Student&apos;s Assignments</Link>
                <Link className="p-3 rounded-md bg-green-100" href="/">Student&apos;s Results</Link>

            </div>
            </div>
            <PerfomanceChart/>
          <Announcement/>
        </div>
    </div>
  )
}



export default StudentSinglePage;