"use client";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  exchangeUSDtoKHR,
  formatToKHRCurrency,
  formatToUSDCurrency,
} from "@/lib/helpers";
import { ClearCart, OrderState } from "@/lib/redux/features/order-slice";
import { IoFastFoodSharp } from "react-icons/io5";
import RadioOrderType from "./radio-order-type";
import { Separator } from "@/components/ui/separator";
import { useState, useTransition } from "react";
import { toast } from "sonner";
import { addOrderWithItems } from "@/lib/actions/orders-action";
import { useSession } from "next-auth/react";
import SelectTable from "./select-table";
import { useAppDispatch } from "@/lib/redux/hooks";

function SheetOrderButton({
  orderItems,
  totalPrice,
}: {
  orderItems: OrderState["orderItems"];
  totalPrice: number;
}) {
  const [orderType, setOrderType] = useState<
    "dine-in" | "take-away" | "delivery" | ""
  >("");

  const [isPending, startTransition] = useTransition();
  const { data: session } = useSession();
  const [tableId, setTableId] = useState<number | 0>(0);
  const dispatch = useAppDispatch()

  const handleCheckOutOrder = async () => {
    if(orderType === "") {
      toast.error("Please select an order type", {
        description: "You need to choose between dine-in, take-away, or delivery.",
      });
      return
    }
    if(orderType === 'dine-in' && tableId === 0) {
      toast.error("Please select a table", {
        description: "You need to choose a table for dine-in orders.",
      });
      return
    }
    if(orderType !== 'dine-in') {
      setTableId(0);
    }
    startTransition(async()=>{
      const { message, error } = await addOrderWithItems({
        user_id: Number(session?.user.id),
        table_id: tableId,
        order_type: orderType,
        items: orderItems.map((item) => ({
          product_id: item.product_id,
          quantity: item.quantity,
          unit_price: item.unit_price,
        })),
      });
      if (error) {
        toast.error(message);
      } else {
        toast.success(message);
        setOrderType("");
        setTableId(0);
        dispatch(ClearCart());
      }
    })
  };

  return (
    <Sheet>
      <SheetTrigger asChild disabled={orderItems.length === 0}>
        <Button className="w-full mt-2 cursor-pointer" variant={"secondary"}>
          Order Now
        </Button>
      </SheetTrigger>
      <SheetContent side="top">
        <SheetHeader>
          <SheetTitle>Your Order</SheetTitle>
          <SheetDescription>
            {orderItems.length} item(s) in your cart
          </SheetDescription>
        </SheetHeader>
        <div className="px-10 py-5 flex flex-wrap gap-4">
          {orderItems.map((item) => (
            <Button
              variant={"secondary"}
              key={item.id}
              className="flex items-center justify-between gap-2 p-5"
            >
              <>
                <IoFastFoodSharp />
              </>
              <span className="flex items-center gap-10">
                <p>{item.name}</p>
                <p>
                  {item.quantity} x {formatToUSDCurrency(item.unit_price)}
                </p>
              </span>
            </Button>
          ))}
        </div>
        <SheetFooter>
          <div className="space-y-2 py-2">
            <p>Total USD: {formatToUSDCurrency(totalPrice)}</p>
            <p>
              Total Khmer: {formatToKHRCurrency(exchangeUSDtoKHR(totalPrice))}
            </p>
            <Separator className="my-4" />
            <RadioOrderType setOrderType={setOrderType} orderType={orderType} />
            {orderType === 'dine-in' && (<>
              <Separator className="my-4" />
            <SelectTable setTableId={setTableId} />
            </>)}
          </div>
          <Button
            variant={"outline"}
            className="w-full cursor-pointer"
            onClick={handleCheckOutOrder}
            disabled={isPending}
          >
            {isPending ? "Placing Order..." : "Checkout"}
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

export default SheetOrderButton;
