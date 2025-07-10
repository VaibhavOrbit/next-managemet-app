import  Announcement  from "@/app/components/Announcement";
import AttandanceChart from "@/app/components/AttandanceChart";
import { CountChart } from "@/app/components/CountChart";
import EventCalendar from "@/app/components/EventCalendar";
import FinanceChart from "@/app/components/FinanceChart";
import UserCard from "@/app/components/UserCard";


 const AdminPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* Left */}
          <div className="w-full lg:w-2/3 gap-8 flex flex-col gap-8 "> 
          <div className="flex gap-4 justify-between flex-wrap">
              <UserCard title="student" date="28/2/25" number="2000" />
              <UserCard title="teacher" date="28/2/25" number="100"/>
              <UserCard title="staff" date="28/2/25"  number="40"/> 
              <UserCard title="patrents"  date="28/2/25" number="2000"/>
              </div>
              {/* MIDDLE CHARTS */}
              <div className="flex gap-4 flex-col lg:flex-row">
                {/* CountChat */}
                <div className="w-full lg:w-1/3 h-[450px]">
                <CountChart/>
                </div>
                {/* ATTENDANCE CHART */}
                <div className="w-full lg:w-2/3 h-[450px]">
              <AttandanceChart/>
              </div>
            </div>
              {/* BOTTOM CHART */}
              <div className="w-full h-[500px]">
                <FinanceChart/>
              </div>
              </div>
              {/* Right */}
              <div className="w-full lg:w-1/3 flex flex-col gap-8"> 
            <EventCalendar/>
            <Announcement/>
    
        </div>
    </div>
  )
}

export default AdminPage;