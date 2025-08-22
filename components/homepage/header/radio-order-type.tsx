"use client";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { getTableByName } from "@/lib/actions/tables-action";
import { Dispatch, SetStateAction } from "react";
import { toast } from "sonner";

function RadioOrderType({
  orderType,
  setOrderType,
  setTableId,
}: {
  orderType: "" | "dine-in" | "take-away" | "delivery";
  setOrderType: Dispatch<
    SetStateAction<"" | "dine-in" | "take-away" | "delivery">
  >;
  setTableId: Dispatch<SetStateAction<number>>;
}) {
  const handleChangeOrderType = async (
    value: "" | "dine-in" | "take-away" | "delivery"
  ) => {
    setOrderType(value);
    if (value !== "dine-in") {
      if (orderType !== "dine-in") {
        const { data, error, message } = await getTableByName(value);
        if (error) {
          toast.error("Failed to fetch table", {
            description: message,
          });
          return;
        }
        setTableId(data[0]?.id);
      }
    }
  };

  return (
    <div className="space-y-2">
      <Label>Order Type</Label>
      <RadioGroup
        defaultValue={orderType}
        onValueChange={handleChangeOrderType}
      >
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
