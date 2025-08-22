"use server";

import { auth } from "../auth";

export const addOrderWithItems = async ({
  table_id,
  order_type,
  items,
}: {
  table_id: number;
  order_type: "dine-in" | "take-away" | "delivery";
  items: Array<{
    product_id: number;
    quantity: number;
    unit_price: number;
  }>;
}) => {
  const session = await auth();
  try {
    const GATEWAY_URL = process.env.GATEWAY_URL;
    const res = await fetch(`${GATEWAY_URL}/order_items/order_with_items`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${session?.user.accessToken}`,
      },
      body: JSON.stringify({
        user_id: session?.user.id,
        table_id,
        order_type,
        items,
      }),
    });
    if (!res.ok) {
      const message = await res.text();
      return { message, error: true };
    }
    return { message: "Your order has been placed successfully.", error: false };
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "An unexpected error occurred";
    return { message, error: true };
  }
};
