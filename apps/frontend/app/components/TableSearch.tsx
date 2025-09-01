"use client"

import Image from 'next/image'
import { useRouter } from 'next/navigation'

export const TableSearch = () => {
  const router = useRouter();
  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const value  = (e.currentTarget[0] as HTMLInputElement).value;
    const params = new URLSearchParams(window.location.search)
    params.set("search", value);
    router.push(`${window.location.pathname}?${params}`);
  }
  return ( 
      <form onSubmit={handleSubmit}  className="w-full md:w-auto flex  gap-3 ring-[1.5px] ring-gray-300 p-2 items-center text-sm rounded-full">
               <Image src="/search.png" alt="" width={14} height={14}/>
               <input
               type="text" 
               placeholder="Search..."
               className=" bg-transparent w-[200px] outline-none"/>
      </form >
  )
}
