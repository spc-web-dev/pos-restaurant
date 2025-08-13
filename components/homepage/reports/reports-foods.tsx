'use client'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { TabsContent } from '@/components/ui/tabs'
import { Checkbox } from '@radix-ui/react-checkbox'
import { ColumnDef, ColumnFiltersState, flexRender, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, SortingState, useReactTable, VisibilityState } from '@tanstack/react-table'
import { ChevronDown } from 'lucide-react'
import React from 'react'

const data = [
    {
        id:1,
        name: 'Pizza',
        quantity_sold: 100,
        revenue: 500,
    },
    {
        id: 2,
        name: 'Burger',
        quantity_sold: 150,
        revenue: 750,
    },
    {
        id: 3,
        name: 'Pasta',
        quantity_sold: 200,
        revenue: 1000,
    },
    {
        id: 4,
        name: 'Salad',
        quantity_sold: 250,
        revenue: 1250,
    },
    {
        id: 5,
        name: 'Sushi',
        quantity_sold: 300,
        revenue: 1500,
    },
    {
        id: 6,
        name: 'Tacos',
        quantity_sold: 350,
        revenue: 1750,
    },
    {
        id: 7,
        name: 'Dumplings',
        quantity_sold: 400,
        revenue: 2000,
    },
    {
        id: 8,
        name: 'Spring Rolls',
        quantity_sold: 450,
        revenue: 2250,
    },
    {
        id: 9,
        name: 'Fried Rice',
        quantity_sold: 500,
        revenue: 2500,
    },
    {
        id: 10,
        name: 'Steak',
        quantity_sold: 550,
        revenue: 2750,
    }
].sort((a, b) => b.revenue - a.revenue)

type DataColumn = {
    id: number;
    name: string;
    quantity_sold: number;
    revenue: number;
}

const columns: ColumnDef<DataColumn>[] = [
     {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    id:'Rank',
    header: 'Rank',
    cell: ({ row }) => {
        return (<span>{row.index === 0 || row.index === 1 || row.index === 2 ? '⭐ #' : ''}{row.index + 1}</span>)
    },
  },
  {
    accessorKey: 'name',
    header: 'Name',
    cell: ({ row }) => <span>{row.getValue('name') as string}</span>,
  },
  {
    accessorKey: 'quantity_sold',
    header: 'Quantity Sold',
    cell: ({ row }) => {
        const quantity = row.getValue('quantity_sold') as number;
         const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(quantity);
        return (<span>{formatted}</span>)
    },
  },
  {
    accessorKey: 'revenue',
    header: 'Revenue',
    cell: ({ row }) => <div>{row.getValue('revenue')}</div>
  }
]

function ReportsFoods() {
    const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})
     const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  })
  return (
    <TabsContent value='foods'>
      <Card>
        <CardHeader>
            <CardTitle className=""> Foods</CardTitle>
            <CardDescription>Best performing food items this month</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="w-full">
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter names..."
          value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("name")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                )
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="overflow-hidden rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="text-muted-foreground flex-1 text-sm">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
        </CardContent>
      </Card>
    </TabsContent>
  )
}

export default ReportsFoods