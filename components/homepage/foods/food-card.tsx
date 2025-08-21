"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { productSchema } from "@/lib/types";
import Image from "next/image";
import z from "zod";
import AddFoodToCart from "./add-food-to-cart";
import { formatToUSDCurrency } from "@/lib/helpers";

type Props = z.infer<typeof productSchema>;

function FoodCard({ props }: { props: Props }) {
  return (
    <Card className="max-w-sm min-w-sm p-0">
      <CardHeader className="hidden">
        <CardTitle>Food Card</CardTitle>
      </CardHeader>
      <CardContent className="p-0 m-0">
        <div className="relative w-full h-full group overflow-hidden rounded-md">
          <div className="bg-[rgba(0,0,0,0.5)] z-50 absolute transition-all group-hover:h-fit flex flex-col px-2 py-2 text-white duration-500 ease-in-out opacity-100 rounded-br-4xl">
            <CardDescription className="text-white">
              {props.name}
            </CardDescription>
            {/* <CardDescription>{props.descriptions}</CardDescription> */}
            <CardDescription className="text-white">
              {formatToUSDCurrency(props.price)}
            </CardDescription>
          </div>
          <AddFoodToCart name={props.name} product_id={props.id} unit_price={props.price} />
          <div className="rounded-md group-hover:scale-110 transition-transform duration-500 ease-in-out z-40">
            <Image
              src={"/images/food.jpg"}
              alt="food profile"
              width={384}
              height={200}
              className="rounded-md"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default FoodCard;
