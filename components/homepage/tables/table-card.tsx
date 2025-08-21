'use client'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { tableSchema } from "@/lib/types"
import Image from "next/image"
import z from "zod"


function TableCard({ props }: { props: z.infer<typeof tableSchema> }) {

  return (
    <div className="group w-sm max-w-sm relative">
      <div className=" relative w-sm max-w-sm h-46 overflow-hidden rounded-md">
        <Image src={'/images/table.jpg'} alt="table" width={300} height={200} className="absolute w-full h-full object-cover "/>
      </div>
      <div className="absolute top-0 left-0 bg-black opacity-80 py-2 px-4 rounded-br-md flex gap-2 items-center">
        <h3 className="text-center">{props.name}</h3>
        <Badge className="" variant={props.status === 'available' ? 'default' : 'destructive'}>{props.status}</Badge>
      </div>
      <div className={`absolute bottom-0 w-full bg-black opacity-0 group-hover:opacity-60 transition-opacity duration-300 px-2 py-2`}>
        <Button variant={'secondary'} className="cursor-pointer">View Details</Button>
      </div>
    </div>
  )
}

export default TableCard