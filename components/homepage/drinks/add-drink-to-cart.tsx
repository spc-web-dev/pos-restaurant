"use client";

import { Button } from "@/components/ui/button";
import { CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { formatToUSDCurrency } from "@/lib/helpers";
import { AddToCart } from "@/lib/redux/features/order-slice";
import { useAppDispatch } from "@/lib/redux/hooks";
import { useRef } from "react";
import { toast } from "sonner";

function AddDrinkToCart({ name, price, id }: { name: string; price: number; id: number }) {
    const qtyRef = useRef<HTMLInputElement>(null);
    const dispatch = useAppDispatch()
    const handleAddToCart = async()=>{
        const qty = qtyRef.current?.value;
        if (!qty || isNaN(Number(qty)) || Number(qty) <= 0) {
            toast.error("Please enter a valid quantity", {
                description: "Quantity must be a positive number!",
            });
            return;
        }
        dispatch(AddToCart({name,product_id: id, quantity: Number(qty), unit_price: price}));
        qtyRef.current!.value = ""; 
        toast.success("Drink added to cart successfully!", {
            description: `You have added ${qty} ${name}(s) to your cart.`,
        });
    }
  return (
    <div className="flex flex-col gap-2 w-full">
      <div>
        <CardDescription className="line-clamp-3">{name}</CardDescription>
        <CardDescription className="">Price: {formatToUSDCurrency(price)}</CardDescription>
      </div>
      <div className="flex items-center gap-2">
        <Input type="number" className="w-16" placeholder="Qty" ref={qtyRef} min={0}/>
        <Button variant={"secondary"} className="cursor-pointer" onClick={handleAddToCart}>
          Add to Cart
        </Button>
      </div>
    </div>
  );
}

export default AddDrinkToCart;
