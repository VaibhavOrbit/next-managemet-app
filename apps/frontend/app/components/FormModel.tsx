"use client"
import Image from "next/image";
import { useState } from "react";

const FormModal = ({table, type, data, id}:{
    table:
    | "teacher"
    | "student"
    | "parent"
    | "subject"
    | "class"
    | "lesson"
    | "exam"
    | "assignment"
    | "result"
    | "attendance"
    | "event"
    | "announcement"
    type: "create" | "update" | "delete";
    data?:  any;
    id?: number;
}) =>  { 
    const size = type === "create" ? "w-8 h-8": "w-7 h-7";
    const bgColor =
     type === "create" 
      ? "bg-yellow-300"
      : type=== "update" 
      ? "bg-blue-300"
     :"bg-purple-300"

     const [open, setOpen] = useState(false);

     const Form = ()=>{
        return type === "delete" && id ? (
            <form action="" className="p-4 flex flex-col gap-4">
                <span  className="text-center font-medium">All data will be lost. Are you sure you want to delete this {table}? </span>
                <button className="bg-red-700 text-white py-2 px-4 rounded-md border-none w-max self-center ">Delete</button>
            </form>
        )  : (
            "create or update form"
        );
     };

    return (
        <>
        <button className={`${size} flex items-center justify-center rounded-full ${bgColor}`}
        onClick={()=>setOpen(true)}
        >
            <Image src={`/${type}.png`} alt="" width={16} height={16}/>
        </button> 
        {open && (
            <div className="w-screen h-screen absolute left-0 top-0 bg-black bg-black/60 z-10 flex items-center justify-center">
                <div className="bg-white p-4 rounded-md relative w-[90%] md:w-[70%] lg:w-[60%] xl:w-[60%] xl:w-[50%] 2xl:w-[40%]">
                    <Form/>
                    <div 
                    className="absolute top-3 right-4 cursor-pointer"
                     onClick={()=>setOpen(false)}
                     >
                        <Image src="/close.png" alt="" width={14} height={14} />
                    </div>
                </div>    
            </div>
        )}
        </>
    )
};

export default FormModal;