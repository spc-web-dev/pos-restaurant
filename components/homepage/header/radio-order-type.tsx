"use client";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Dispatch, SetStateAction } from "react";

function RadioOrderType({ orderType, setOrderType }: { orderType: "" | "dine-in" | "take-away" | "delivery"; setOrderType: Dispatch<SetStateAction<"" | "dine-in" | "take-away" | "delivery">> }) {
  const handleChangeOrderType = (value: "" | "dine-in" | "take-away" | "delivery") => {
    setOrderType(value);
  };

  return (
    <div className="space-y-2">
      <Label>Order Type</Label>
      <RadioGroup defaultValue={orderType} onValueChange={handleChangeOrderType}>
        <div className="flex items-center gap-3">
          <RadioGroupItem value="dine-in" id="r1" />
          <Label htmlFor="r1">Dine in</Label>
        </div>
        <div className="flex items-center gap-3">
          <RadioGroupItem value="take-away" id="r2" />
          <Label htmlFor="r2">Take away</Label>
        </div>
        <div className="flex items-center gap-3">
          <RadioGroupItem value="delivery" id="r3" />
          <Label htmlFor="r3">Delivery</Label>
        </div>
      </RadioGroup>
    </div>
  );
}

export default RadioOrderType;
