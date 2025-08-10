'use client'
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { DollarSign } from "lucide-react";

type TotalCardProps = {
  title: string;
  total: number;
  change: number;
};


function TotalCard({ title, total, change }: TotalCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <DollarSign className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">${total.toFixed(2)}</div>
        <p className="text-xs text-muted-foreground">
          <span className={change > 0 ? "text-green-500" : "text-red-500"}>
            {change > 0 ? `+${change.toFixed(2)}` : change.toFixed(2)}
          </span>{" "}
          from yesterday
        </p>
      </CardContent>
    </Card>
  );
}

export default TotalCard;
