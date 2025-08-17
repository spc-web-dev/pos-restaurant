'use client'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import dynamic from "next/dynamic";

const RecentOrdersTableNoSSR = dynamic(() => import("./recent-orders-table"), {
  ssr: false,
}); 
function RecentOrders() {
  return (
    <div className="w-full">
      <Card className="">
        <CardHeader>
          <CardTitle>Recent Orders</CardTitle>
          <CardDescription>Latest orders from your restaurant</CardDescription>
        </CardHeader>
        <CardContent className="">
            <RecentOrdersTableNoSSR />
        </CardContent>
      </Card>
    </div>
  );
}

export default RecentOrders;
