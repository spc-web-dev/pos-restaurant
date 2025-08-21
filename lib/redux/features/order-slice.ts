import { createSlice, nanoid } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface OrderState {
  orderItems: {
    id?: string;
    name: string;
    product_id: number;
    quantity: number;
    unit_price: number;
  }[];
}

const initialState: OrderState = {
  orderItems:
    typeof window !== "undefined" && localStorage.getItem("orderItems")
      ? JSON.parse(localStorage.getItem("orderItems") || "[]")
      : [],
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    AddToCart: (
      state,
      action: PayloadAction<OrderState["orderItems"][number]>
    ) => {
      state.orderItems.push({
        id: nanoid(),
        name: action.payload.name,
        product_id: action.payload.product_id,
        quantity: action.payload.quantity,
        unit_price: action.payload.unit_price,
      });
      if (typeof window !== "undefined") {
        localStorage.setItem("orderItems", JSON.stringify(state.orderItems));
      }
    },
    ClearCart: (state) => {
      state.orderItems = [];
      if (typeof window !== "undefined") {
        localStorage.removeItem("orderItems");
      }
    },
    UpdateQuantity: (
      state,
      action: PayloadAction<{ id: string; quantity: number }>
    ) => {
      const { id, quantity } = action.payload;
      const item = state.orderItems.find((item) => item.id === id);
      if (item) {
        item.quantity = quantity;
        if (typeof window !== "undefined") {
          localStorage.setItem("orderItems", JSON.stringify(state.orderItems));
        }
      }
    },
    DeleteItemInOrder: (state, action: PayloadAction<{ id: string }>) => {
      const { id } = action.payload;
      const item = state.orderItems.find((item) => item.id === id);
      if (item) {
        state.orderItems = state.orderItems.filter((item) => item.id !== id);
        if (typeof window !== "undefined") {
          localStorage.setItem("orderItems", JSON.stringify(state.orderItems));
        }
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { AddToCart, ClearCart, UpdateQuantity, DeleteItemInOrder } =
  orderSlice.actions;

export default orderSlice.reducer;
