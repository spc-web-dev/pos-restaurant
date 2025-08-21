"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  DeleteItemInOrder,
  UpdateQuantity,
} from "@/lib/redux/features/order-slice";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { ListOrdered, Trash } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import SheetOrderButton from "./sheet-order-btn";
import { formatToUSDCurrency } from "@/lib/helpers";

function ListOrderedButton() {
  const orderItems = useAppSelector((state) => state.order.orderItems);
  const dispatch = useAppDispatch();
  const [totalPrice, setTotalPrice] = useState(0);

  const handleChangeQuantity = (
    e: React.ChangeEvent<HTMLInputElement>,
    id: string
  ) => {
    if (!e.target.value && orderItems.length > 0) {
      toast("Quantity cannot be empty", {
        description: "Please enter a valid quantity or remove the item.",
      });
      return;
    }
    const newQuantity = parseInt(e.target.value);
    if (newQuantity <= 0) {
      toast("Invalid quantity", {
        description: "Please enter a valid quantity or remove the item.",
      });
      return;
    }
    dispatch(UpdateQuantity({ id, quantity: newQuantity }));
  };

  useEffect(() => {
    const total = orderItems.reduce(
      (acc, item) => acc + item.unit_price * item.quantity,
      0
    );
    setTotalPrice(total);
  }, [orderItems]);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className=" cursor-pointer" variant={"outline"}>
          <ListOrdered />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="px-2 py-2">
        <ul className="flex flex-col gap-1 max-h-96 overflow-y-auto ">
          {orderItems.length > 0 &&
            orderItems.map((item) => (
              <Button
                asChild
                variant={"ghost"}
                key={item.id}
                className=" w-full justify-between flex items-center"
              >
                <li className="">
                  <p className=" truncate line-clamp-1 text-sm font-light max-w-[50%]">
                    {item.name}
                  </p>
                  <div className="flex items-center gap-2">
                    <Input
                      type="number"
                      className="w-16 h-6"
                      placeholder="Qty"
                      defaultValue={item.quantity}
                      min={0}
                      onChange={(e) =>
                        handleChangeQuantity(e, item.id as string)
                      }
                    />
                    <span
                      className="cursor-pointer"
                      onClick={() =>
                        dispatch(DeleteItemInOrder({ id: item.id as string }))
                      }
                    >
                      <Trash />
                    </span>
                  </div>
                </li>
              </Button>
            ))}
        </ul>
        <div>
          <Button className="w-full mt-2 cursor-pointer" variant={"ghost"}>
            Total: {formatToUSDCurrency(totalPrice)}
          </Button>
          <SheetOrderButton orderItems={orderItems} totalPrice={totalPrice} />
        </div>
      </PopoverContent>
    </Popover>
  );
}

export default ListOrderedButton;
