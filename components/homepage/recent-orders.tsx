import React from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table'
import { Badge } from '../ui/badge'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Button } from '../ui/button'
import { Clock, Eye, MoreHorizontal } from 'lucide-react'

function RecentOrders() {
      const recentOrders = [
    {
      id: "#ORD-001",
      customer: "Table 5",
      items: "2x Burger, 1x Fries, 2x Coke",
      total: "$28.50",
      status: "completed",
      time: "2 min ago",
    },
    {
      id: "#ORD-002",
      customer: "Table 12",
      items: "1x Pizza Margherita, 1x Wine",
      total: "$35.00",
      status: "preparing",
      time: "5 min ago",
    },
    {
      id: "#ORD-003",
      customer: "Takeaway",
      items: "3x Coffee, 2x Sandwich",
      total: "$22.75",
      status: "ready",
      time: "8 min ago",
    },
    {
      id: "#ORD-004",
      customer: "Table 3",
      items: "1x Steak, 1x Salad, 1x Beer",
      total: "$45.00",
      status: "preparing",
      time: "12 min ago",
    },
    {
      id: "#ORD-005",
      customer: "Table 8",
      items: "2x Pasta, 1x Garlic Bread",
      total: "$32.00",
      status: "completed",
      time: "15 min ago",
    },
  ]

   const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return (
          <Badge variant="default" className="bg-green-500">
            Completed
          </Badge>
        )
      case "preparing":
        return (
          <Badge variant="secondary" className="bg-yellow-500 text-white">
            Preparing
          </Badge>
        )
      case "ready":
        return (
          <Badge variant="outline" className="border-blue-500 text-blue-500">
            Ready
          </Badge>
        )
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }


  return (
    <div className="w-full">
            <Card className="">
              <CardHeader>
                <CardTitle>Recent Orders</CardTitle>
                <CardDescription>Latest orders from your restaurant</CardDescription>
              </CardHeader>
              <CardContent className=''>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Order ID</TableHead>
                      <TableHead>Customer</TableHead>
                      <TableHead className="hidden md:table-cell">Items</TableHead>
                      <TableHead>Total</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="hidden sm:table-cell">Time</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recentOrders.map((order) => (
                      <TableRow key={order.id}>
                        <TableCell className="font-medium">{order.id}</TableCell>
                        <TableCell>{order.customer}</TableCell>
                        <TableCell className="hidden md:table-cell max-w-[200px] truncate">{order.items}</TableCell>
                        <TableCell className="font-medium">{order.total}</TableCell>
                        <TableCell>{getStatusBadge(order.status)}</TableCell>
                        <TableCell className="hidden sm:table-cell text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {order.time}
                          </div>
                        </TableCell>
                        <TableCell className="text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <MoreHorizontal className="h-4 w-4" />
                                <span className="sr-only">Actions</span>
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>
                                <Eye className="h-4 w-4 mr-2" />
                                View Details
                              </DropdownMenuItem>
                              <DropdownMenuItem>Print Receipt</DropdownMenuItem>
                              <DropdownMenuItem>Refund Order</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
  )
}

export default RecentOrders