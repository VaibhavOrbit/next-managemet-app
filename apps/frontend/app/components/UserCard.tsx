import Image from "next/image"

interface userCardProps{
    date:string,
    number:string,
    title:string
}


const UserCard = ({date, number,title}:userCardProps) => {
  return (
    //learn 
    <div className="rounded-2xl odd:bg-[#C3EBFA] even:bg-[#FAE27C] flex-1 p-4 min-w-[130px]  ">
        <div className="flex justify-between itmes-center ">
        <span className="bg-white text-green-600 px-2 py-1 rounded-full text-[10px]"> {date}  </span>
        <Image src="/more.png" width={20}  height={20} alt=""/>
        </div>
        <h1 className="text-2xl font-semibold my-4">{number}</h1>
        <h2 className="capitalize text-sm font-medium text-gray-500">{title}</h2>
    </div>
  )
}

export default UserCard