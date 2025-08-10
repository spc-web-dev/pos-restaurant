import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import RecentOrdersTable from "../recent-orders-table";

function RecentOrders() {
  return (
    <div className="w-full">
      <Card className="">
        <CardHeader>
          <CardTitle>Recent Orders</CardTitle>
          <CardDescription>Latest orders from your restaurant</CardDescription>
        </CardHeader>
        <CardContent className="">
          <RecentOrdersTable />
        </CardContent>
      </Card>
    </div>
  );
}

export default RecentOrders;
