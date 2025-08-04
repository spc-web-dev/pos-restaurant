import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"


function TableCard() {
  return (
    <div className="group max-w-sm relative">
      <div className=" relative w-sm max-w-sm h-46 overflow-hidden rounded-md">
        <Image src={'/images/table.jpg'} alt="Food" width={300} height={200} className="absolute w-full h-full object-cover "/>
      </div>
      <div className="absolute top-0 left-0 bg-black opacity-80 py-2 px-4 rounded-br-md flex gap-2 items-center">
        <h3 className="text-center">Table Name</h3>
        <Badge className="" variant={'destructive'}>unavailable</Badge>
      </div>
      <div className={`absolute bottom-0 w-full bg-black opacity-0 group-hover:opacity-60 transition-opacity duration-300 px-2 py-2`}>
        <Button variant={'secondary'} className="cursor-pointer">View Details</Button>
      </div>
    </div>
  )
}

export default TableCard