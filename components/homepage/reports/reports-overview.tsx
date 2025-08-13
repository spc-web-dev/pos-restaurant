"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TabsContent } from "@/components/ui/tabs";
import { TrendingDown, TrendingUp } from "lucide-react";
import React from "react";

function ReportsOverview() {
  const salesData = [
    {
      period: "Today",
      sales: 2847.5,
      orders: 127,
      customers: 89,
      growth: 12.5,
    },
    {
      period: "Yesterday",
      sales: 2531.25,
      orders: 117,
      customers: 82,
      growth: -3.2,
    },
    {
      period: "This Week",
      sales: 18245.75,
      orders: 823,
      customers: 567,
      growth: 8.7,
    },
    {
      period: "Last Week",
      sales: 16789.5,
      orders: 756,
      customers: 523,
      growth: 15.3,
    },
    {
      period: "This Month",
      sales: 72456.25,
      orders: 3245,
      customers: 2134,
      growth: 11.2,
    },
    {
      period: "Last Month",
      sales: 65123.75,
      orders: 2987,
      customers: 1987,
      growth: 9.8,
    },
  ];
  return (
    <TabsContent value="overview">
      <Card>
        <CardHeader>
          <CardTitle>Overview</CardTitle>
          <CardDescription>
            This is a brief description of the overview.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Period</TableHead>
                <TableHead>Sales</TableHead>
                <TableHead>Orders</TableHead>
                <TableHead>Customers</TableHead>
                <TableHead>Growth</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {salesData.map((data) => (
                <TableRow key={data.period}>
                  <TableCell className="font-medium">{data.period}</TableCell>
                  <TableCell>${data.sales.toLocaleString()}</TableCell>
                  <TableCell>{data.orders.toLocaleString()}</TableCell>
                  <TableCell>{data.customers.toLocaleString()}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      {data.growth >= 0 ? (
                        <TrendingUp className="h-3 w-3 text-green-500" />
                      ) : (
                        <TrendingDown className="h-3 w-3 text-red-500" />
                      )}
                      <span
                        className={
                          data.growth >= 0 ? "text-green-500" : "text-red-500"
                        }
                      >
                        {data.growth > 0 ? "+" : ""}
                        {data.growth}%
                      </span>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </TabsContent>
  );
}

export default ReportsOverview;
