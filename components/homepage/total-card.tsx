import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { DollarSign } from "lucide-react";

function TotalCard() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
        <DollarSign className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">$2,847.50</div>
        <p className="text-xs text-muted-foreground">
          <span className="text-green-500">+12.5%</span> from yesterday
        </p>
      </CardContent>
    </Card>
  );
}

export default TotalCard;
