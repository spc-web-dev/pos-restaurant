'use client'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { ListOrdered, Trash } from "lucide-react"

function ListOrderedButton() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className=" cursor-pointer" variant={'outline'}><ListOrdered /></Button>
      </PopoverTrigger>
      <PopoverContent className="px-2 py-2">
        <ul className="flex flex-col gap-1 max-h-96 overflow-y-auto ">
          {Array.from({ length: 10 }, (_, index) => (
          <Button asChild variant={'ghost'} key={index} className=" w-full justify-between flex items-center">
            <li className="">
              <p className=" truncate line-clamp-1 text-sm font-light max-w-[50%]">List Item {index + 1}</p>
              <div className="flex items-center gap-2">
                <Input type="number" className="w-16 h-6" placeholder="Qty" />
                <span className="cursor-pointer">
                  <Trash />
                </span>
              </div>
            </li>
          </Button>))}
        </ul>
        <div>
          <Button className="w-full mt-2 cursor-pointer" variant={'ghost'}>Total: 1000$</Button>
          <Button className="w-full mt-2 cursor-pointer" variant={'secondary'}>Order Now</Button>
        </div>
      </PopoverContent>
    </Popover>
  )
}

export default ListOrderedButton