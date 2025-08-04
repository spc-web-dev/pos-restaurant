'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Image from "next/image";

function DrinkCard() {
  return (
    <Card className="max-w-sm">
      <CardHeader className="hidden">
        <CardTitle>Drink Card</CardTitle>
      </CardHeader>
      <CardContent>
        <div>
          <Image src={'/images/drink.jpg'} alt="drink profile" width={350} height={200} className="rounded-md"/>
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex flex-col gap-2 w-full">
          <div>
            <CardDescription className="line-clamp-3">Lorem ipsum dolor sit amet.</CardDescription>
            <CardDescription className="">Price: $5.00</CardDescription>
          </div>
          <div className="flex items-center gap-2">
            <Input type="number" className="w-16" placeholder="Qty" />
            <Button variant={'secondary'} className="cursor-pointer">Add to Cart</Button>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}

export default DrinkCard