"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AddToCart } from "@/lib/redux/features/order-slice";
import { useAppDispatch } from "@/lib/redux/hooks";
import { Bookmark } from "lucide-react";
import { useRef } from "react";
import { toast } from "sonner";

function AddFoodToCart({
  product_id,
  unit_price,
  name,
}: {
  product_id: number;
  unit_price: number;
  name: string;
}) {
  const quantityRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();
  const handleAddToCart = () => {
    if (!quantityRef.current?.value) {
      toast.error("Please enter a quantity", {
        description: "You must specify a quantity to add to the cart.",
      });
      return;
    }
    const quantity = parseInt(quantityRef.current.value);
    if (isNaN(quantity) || quantity <= 0) {
      toast.error("Invalid quantity", {
        description: "Please enter a valid quantity.",
      });
      return;
    }
    dispatch(AddToCart({ product_id, quantity, unit_price, name }));
    toast.success("The food has been added to cart", {
      description: `Added ${quantity} item(s) to your cart.`,
    });
    quantityRef.current.value = "";
  };

  return (
    <div className="absolute group-hover:bottom-2 -bottom-10 left-2 group-hover:z-50 transition-all duration-500 ease-in-out flex items-center gap-2">
      <Button
        className="  cursor-pointer"
        variant={"secondary"}
        onClick={handleAddToCart}
      >
        <Bookmark />
      </Button>
      <span className="bg-[rgba(0,0,0,0.5)] rounded-md">
        <Input
          type="number"
          className="w-16"
          placeholder="Qty"
          ref={quantityRef}
        />
      </span>
    </div>
  );
}

export default AddFoodToCart;
