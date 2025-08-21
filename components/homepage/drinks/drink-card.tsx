'use client';

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import AddDrinkToCart from "./add-drink-to-cart";
import z from "zod";
import { productSchema } from "@/lib/types";

type Props = z.infer<typeof productSchema>

function DrinkCard({ props }: { props: Props }) {
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
        <AddDrinkToCart name={props.name} price={props.price} id={props.id}  />
      </CardFooter>
    </Card>
  )
}

export default DrinkCard