'use client'


import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Bookmark } from "lucide-react"
import Image from "next/image"

function FoodCard() {
  return (
    <Card className="max-w-sm p-0">
      <CardHeader className="hidden">
        <CardTitle>Food Card</CardTitle>
      </CardHeader>
      <CardContent className="p-0 m-0">
        <div className="relative w-full h-full group overflow-hidden rounded-md">
          <div className="bg-[rgba(0,0,0,0.5)] z-50 absolute transition-all group-hover:h-fit flex flex-col px-2 py-2 text-white duration-500 ease-in-out opacity-100 rounded-br-4xl">
            <CardDescription className="text-white">
              Delicious Food
            </CardDescription>
            <CardDescription>Lorem ipsum dolor sit amet.</CardDescription>
            <CardDescription className="text-white">
              10$
            </CardDescription>
          </div>
          <div className="absolute group-hover:bottom-2 -bottom-10 left-2 group-hover:z-50 transition-all duration-500 ease-in-out flex items-center gap-2">
            <Button className="  cursor-pointer" variant={'secondary'}><Bookmark/></Button>
            <span className="bg-[rgba(0,0,0,0.5)] rounded-md"><Input type="number" className="w-16" placeholder="Qty" /></span>
          </div>
          <div className="rounded-md group-hover:scale-110 transition-transform duration-500 ease-in-out z-40">   
            <Image src={'/images/food.jpg'} alt="food profile" width={384} height={200} className="rounded-md"/>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default FoodCard