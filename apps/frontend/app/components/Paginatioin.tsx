const Pagination = () => {
    return (
        <div className="p-4 flex items-center justify-between text-gray-500">
            <button  className="py-2 px-4 rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed ">
            Prev
            </button>

            <div className="flex items-center text-sm gap-3 ">
                <button className="px-2 bg-blue-200 rounded-md ">1</button>
               <button className="px-2 rounded-md ">2</button>
               <button className="px-2 rounded-md ">3</button>
               ...
               <button className="px-2 rounded-md ">10</button>

            </div>
            
            <button  className="py-2 px-4 rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed ">
            Next
            </button>


        </div>
    )
}

export default Pagination